import express from 'express'
import { createServer as createViteServer } from 'vite'

async function startServer() {
    const app = express()

    const vite = await createViteServer({
        server: {middlewareMode: true}
    })

    app.use(vite.middlewares)

    app.use('*all', async (request, response) => {
        try {
            const url = request.originalUrl.replace('/', '');

            const render = (await vite.ssrLoadModule('/src/entry.server.jsx')).render;
            const rendered = await render(url)
            const template = await vite.transformIndexHtml(url,`
                <!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Семейный календарь</title>
                    <script type="module" crossorigin src="/src/entry-client.jsx"></script>
                  </head>
                  <body>
                    <div id="root">${rendered}</div>
                  </body>
                </html>
      `);
        response.status(200).set({ 'Content-Type': 'text/html' }).end(template);

        console.log(template)
    } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e.stack);
        response.status(500).end(e.stack);
    }
        // const {default: runApp} = await vite.ssrLoadModule('/entry.server.jsx')
        // const {serverApp} = await runApp()
        //
        // const {pipe} = renderToPipeableStream(serverApp, {
        //     bootstrapModules: ['/entry-client.jsx'],
        //     onAllReady() {
        //         response.statusCode = 200
        //         response.setHeader('Content-Type', 'text/html')
        //         pipe(response)
        //     }
        // })
    })

    const PORT = 5004
    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`)
    })
}

startServer()