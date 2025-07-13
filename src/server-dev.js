import express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import { createServer as createViteServer } from 'vite'
import App from "./components/App/App.tsx";
import React from "react";


    const app = express()

    const vite = await createViteServer({
        // server: { middlewareMode: 'ssr' }
    })

    app.use(vite.middlewares)

    app.use('/', (request, response) => {
        // const url = request.originalUrl

        try {
            // const { default: runApp } = vite.ssrLoadModule('/entry-server.tsx')
            // const { app } = runApp({ url })

            const { pipe } = renderToPipeableStream( React.createElement(App), {
                bootstrapModules: ['/entry-client.tsx'],
                onAllReady() {
                    response.statusCode = 200
                    response.setHeader('Content-type', 'text/html')
                    pipe(response)
                }
            })
        } catch (e: never) {
            vite.ssrFixStacktrace(e)
        }

        const PORT = process.env.PORT || 5005
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`)
        })
    })

