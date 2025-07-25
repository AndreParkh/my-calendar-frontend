import fs from 'node:fs/promises'
import express from 'express'
import { Transform } from 'node:stream'

const port = process.env.PORT || 5003
const base = process.env.BASE || '/'
const ABORT_DELAY = 10_000

const setupDevMiddlewares = async (app) => {
    const {createServer} = await import('vite')
    const viteDevServer = await createServer({
        server: {middlewareMode: true},
        appType: 'custom',
        base,
    })
    app.use(viteDevServer.middlewares)
    return viteDevServer
}

const setupProdMiddlewares = async (app) => {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv('./dist/client', {extensions: []}))
    return null
}

const sendStreamedResponse = async (req, res, template, renderFn, getContext) => {
    const [htmlStart, htmlEnd] = template.split('<div id="root"></div>')

    const { context, router } = await getContext(req, res)

    const { pipe, abort } = renderFn(context,router, {
        onShellError() {
            res.status(500)
            res.set({ 'Content-Type': 'text/html' })
            res.send('<h1>Что-то пошло не так</h1>')
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

const handleRequestDev = async (req, res, viteDevServer) => {
    const url = req.originalUrl.replace(base, '')

    try {
        const rawTemplate = await fs.readFile('./index.html', 'utf-8')
        const template= await viteDevServer.transformIndexHtml(url, rawTemplate)
        const { render, getContext }  = await viteDevServer.ssrLoadModule('/src/entry.server.tsx')
        // const { getContext }  = await viteDevServer.ssrLoadModule('/src/utils/router.ts')
        await sendStreamedResponse(req, res, template, render, getContext)
    } catch (e) {
        viteDevServer.ssrFixStacktrace(e)
        console.error(e.stack)
        res.status(500).end(e.stack)
    }
}
const handleRequestProd = async (req, res) => {
    try {
        const template = await fs.readFile('./dist/client/index.html', 'utf-8')
        const { render, getContext } = await import('./dist/server/entry.server.js')

        await sendStreamedResponse(req, res, template, render, getContext)
    } catch (e) {
        console.error(e.stack)
        res.status(500).end(e.stack)
    }
}

const startServer = async () => {
    const app = express()
    const isProduction = process.env.NODE_ENV === 'production'

    if (isProduction) {
        await setupProdMiddlewares(app)
        app.use('*all', (req, res) => handleRequestProd(req, res))
    } else {
        const viteDevServer = await setupDevMiddlewares(app)
        app.use('*all', (req, res) => handleRequestDev(req, res, viteDevServer))
    }

    app.listen(port, '0.0.0.0', () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}



startServer()