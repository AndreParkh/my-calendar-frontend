import type { RenderToPipeableStreamOptions } from 'react-dom/server'
import type { StaticHandlerContext, DataRouter } from 'react-router-dom'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { getContext } from './utils/router.ts'
import '@/i18n/i18n.ts';

const render = (
  context: StaticHandlerContext,
  router: DataRouter,
  options?: RenderToPipeableStreamOptions,
) => {
  return renderToPipeableStream(
    <div id="root">
      <StrictMode>
        <StaticRouterProvider router={router} context={context} />
      </StrictMode>
    </div>,
    options,
  )
}

export { render, getContext }
