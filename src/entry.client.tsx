import './index.css'
import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'
import '@/i18n/i18n.ts'
import { Provider } from 'react-redux'
import { createStore } from '@/store/store.ts'

const router = createBrowserRouter(routes)
const store = createStore(window.__INITIAL_STATE__)

ReactDom.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
