import type * as express from 'express'

export const createFetchRequest = (
  request: express.Request,
  response: express.Response,
) => {
  const origin = `${request.protocol}://${request.get('host')}`
  const url = new URL(request.originalUrl || request.url, origin)

  const controller = new AbortController()
  response.on('close', () => controller.abort())

  const headers = new Headers(request.headers as HeadersInit)
  const init: RequestInit = {
    method: request.method,
    headers,
    signal: controller.signal,
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body
  }

  return new Request(url.href, init)
}
