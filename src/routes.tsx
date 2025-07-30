import { RouteObject } from 'react-router-dom'
import {
  App,
  AuthLayout,
  CatchAll,
  UserError,
  Login,
  ProtectedLayout,
  Register,
  User, redirectAuthLoader, redirectNonAuthLoader
} from '@/components'


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        loader: redirectAuthLoader,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
      {
        path: 'app',
        element: <ProtectedLayout />,
        loader: redirectNonAuthLoader,
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
