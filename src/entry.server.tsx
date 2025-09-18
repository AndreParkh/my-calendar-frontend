import type { RenderToPipeableStreamOptions } from 'react-dom/server'
import type { StaticHandlerContext, DataRouter } from 'react-router-dom'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { getContext } from './utils/router.ts'
import '@/i18n/i18n.ts'
import { Provider } from 'react-redux'
import { AppStore, createStore } from '@/store/store.ts'
import { setTokenToStore } from '@/utils/setTokenToStore.ts'

const render = (
  context: StaticHandlerContext,
  router: DataRouter,
  store: AppStore,
  options?: RenderToPipeableStreamOptions,
) => {
  return renderToPipeableStream(
    <div id="root">
      <StrictMode>
        <Provider store={store}>
          <StaticRouterProvider router={router} context={context} />
        </Provider>
      </StrictMode>
    </div>,
    options,
  )
}
export { render, getContext, createStore, setTokenToStore }
