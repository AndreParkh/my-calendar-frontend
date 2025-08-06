import { RouteObject } from 'react-router-dom'
import {
  App,
  CatchAll,
  UserError,
  Login,
  ProtectedRoute,
  Register,
  User,
  AuthLayout,
} from '@/components'

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
        element: (
          <ProtectedRoute redirectAuthPath={'/user'}>
            <AuthLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
      {
        path: 'user',
        element: (
          <ProtectedRoute redirectNonAuthPath={'/auth/login'}>
            <User />
          </ProtectedRoute>
        ),
        errorElement: <UserError />,
      },
    ],
  },
  {
    path: '*?',
    Component: CatchAll,
  },
]
