import { RouteObject } from 'react-router-dom'
import { redirect } from 'react-router'
import {
  App,
  AuthLayout,
  CatchAll,
  Error,
  Login,
  ProtectedLayout,
  Register,
  User,
} from '@/components'
import { AUTH_TOKEN } from '@/constants/constants.ts'

const requireAuthLoader = (args: { request: Request }) => {
  const token = args.request.headers.get(AUTH_TOKEN) || ''

  if (!token) {
    const returnTo = new URL(args.request.url).pathname
    return redirect(`/auth/login?returnTo=${encodeURIComponent(returnTo)}`, 302)
  }
  return null
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
      {
        path: 'app',
        element: <ProtectedLayout />,
        loader: requireAuthLoader,
        children: [
          {
            path: 'user',
            element: <User />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
  {
    path: '*?',
    Component: CatchAll,
  },
]
