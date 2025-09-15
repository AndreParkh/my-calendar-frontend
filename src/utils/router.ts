import type * as express from 'express'
import { createStaticHandler, createStaticRouter } from 'react-router'
import { routes } from '../routes.tsx'
import { createFetchRequest } from './request.ts'
import { AppStore } from '@/store/store.ts'

export const getContext = async (
  req: express.Request,
  res: express.Response,
  store: AppStore,
) => {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(req, res, store)

  const context = await query(remixRequest)
  if (context instanceof Response) {
    const status = context.status
    const location = context.headers.get('Location')

    if (location && status >= 300 && status < 400) {
      res.redirect(status, location)
    } else {
      res.status(status).end()
    }
    throw context
  }
  const router = createStaticRouter(dataRoutes, context)
  return { context, router }
}
