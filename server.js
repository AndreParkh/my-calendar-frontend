import fs from 'node:fs/promises'
import express from 'express'
import { Transform } from 'node:stream'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5003
const base = process.env.BASE || '/'
const ABORT_DELAY = 10_000

const getTemplateHtml = async () =>
    isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : ''

const setupMiddlewares = async (app) => {
    if (!isProduction) {
        const { createServer } = await import('vite')
        const viteDevServer = await createServer({
            server: { middlewareMode: true },
            appType: 'custom',
            base,
        })
        app.use(viteDevServer.middlewares)
        return viteDevServer
    } else {
        const compression = (await import('compression')).default
        const sirv = (await import('sirv')).default
        app.use(compression())
        app.use(base, sirv('./dist/client', { extensions: [] }))
        return null
    }
}

const getTemplate = async (url, viteDevServer) => {
    if (!isProduction) {
        const rawTemplate = await fs.readFile('./index.html', 'utf-8')
        return viteDevServer.transformIndexHtml(url, rawTemplate)
    } else {
        return getTemplateHtml()
    }
}

const getRenderer = async (viteDevServer) => {
    if (!isProduction) {
        const { render } = await viteDevServer.ssrLoadModule('/src/entry-server.tsx')
        return render
    } else {
        const { render } = await import('./dist/server/entry-server.js')
        return render
    }
}

const sendStreamedResponse = (res, template, renderFn, url) => {
    const [htmlStart, htmlEnd] = template.split('<!--app-html-->')

    const { pipe, abort } = renderFn(url, {
        onShellError() {
            res.status(500)
            res.set({ 'Content-Type': 'text/html' })
            res.send('<h1>Something went wrong</h1>')
        },
        onShellReady() {
            res.status(200)
            res.set({ 'Content-Type': 'text/html' })

            const transformStream = new Transform({
                transform(chunk, encoding, callback) {
                    res.write(chunk, encoding)
                    callback()
                },
            })

            res.write(htmlStart)

            transformStream.on('finish', () => {
                res.end(htmlEnd)
            })

            pipe(transformStream)
        },
        onError(error) {
            console.error(error)
        },
    })

    setTimeout(() => {
        abort()
    }, ABORT_DELAY)
}

// Обработчик запросов
const handleRequest = async (req, res, vite) => {
    try {
        const url = req.originalUrl.replace(base, '')
        const template = await getTemplate(url, vite)
        const renderFn = await getRenderer(vite)

        sendStreamedResponse(res, template, renderFn, url)
    } catch (e) {
        if (vite && typeof vite.ssrFixStacktrace === 'function') {
            vite.ssrFixStacktrace(e)
        }
        console.error(e.stack)
        res.status(500).end(e.stack)
    }
}

const startServer = async () => {
    const app = express()
    const vite = await setupMiddlewares(app)

    app.use('*all', (req, res) => handleRequest(req, res, vite))

    app.listen(port, '0.0.0.0', () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}

startServer()