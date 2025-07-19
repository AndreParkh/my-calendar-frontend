import type * as express from 'express'
import { createStaticHandler, createStaticRouter } from 'react-router'
import { routes } from '../routes.tsx'
import { createFetchRequest } from './request.ts'

const getContext = async (req: express.Request, res: express.Response) => {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(req, res)
  const context = await query(remixRequest)
  if (context instanceof Response) throw context

  const router = createStaticRouter(dataRoutes, context)

  return { context, router }
}

export { getContext }
