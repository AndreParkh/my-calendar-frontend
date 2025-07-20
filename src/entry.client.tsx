import './index.css'
import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'
import '@/i18n/i18n.ts';

const router = createBrowserRouter(routes)

ReactDom.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
