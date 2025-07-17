import type * as express from "express";

function createFetchRequest(
    request: express.Request,
    response: express.Response
) {
    const origin = `${request.protocol}://${request.get('host')}`

    const url = new URL(request.originalUrl || request.url, origin)

    const controller = new AbortController()
    response.on('close',() => controller.abort())

    const headers = new Headers()

    for (const [key, values] of Object.entries(request.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (const value of values) {
                    headers.append(key, value)
                }
            } else {
                headers.set(key, values)
            }
        }
    }

    const init: RequestInit = {
        method: request.method,
        headers,
        signal: controller.signal
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
        init.body = request.body
    }

    return new Request(url.href, init)
}

export { createFetchRequest }