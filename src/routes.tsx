import { RouteObject } from 'react-router-dom'
import { redirect } from 'react-router'
import { parse } from 'cookie'
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

const requireAuthLoader = (args: { request: Request }) => {
  const cookies = parse(args.request.headers.get('Cookie') || '')
  const token = cookies['auth_token']

  if (!token) {
    return redirect('/auth/login', 302)
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
