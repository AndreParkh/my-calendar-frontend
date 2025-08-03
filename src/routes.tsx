import { RouteObject } from 'react-router-dom'
import {
  App,
  AuthLayout,
  CatchAll,
  UserError,
  Login,
  ProtectedLayout,
  Register,
  User,
} from '@/components'

export const protectedRoutes = ['/app/*']
export const redirectRoutes = ['/auth/login', '/auth/register']

export const routesPaths = {
  root: '/',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  app: {
    user: '/app/user',
  },
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
        children: [
          {
            path: 'user',
            element: <User />,
            errorElement: <UserError />,
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
