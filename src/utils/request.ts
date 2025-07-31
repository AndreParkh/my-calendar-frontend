import type * as express from 'express'

export const createFetchRequest = (
  request: express.Request,
  response: express.Response,
) => {
  const origin = `${request.protocol}://${request.get('host')}`

  const url = new URL(request.originalUrl || request.url, origin)

  const controller = new AbortController()
  response.on('close', () => controller.abort())

  const headers = Object.entries(request.headers).reduce((acc, [key, values]) => {
    if (!values) return acc
    if (Array.isArray(values)) {
      values.forEach(value => acc.append(key, value))
    } else {
      acc.set(key, values)
    }
    return acc
  }, new Headers)

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
