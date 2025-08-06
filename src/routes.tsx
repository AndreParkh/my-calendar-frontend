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
    user: '/user',
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
          <ProtectedRoute redirectAuthPath={routesPaths.app.user}>
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
          <ProtectedRoute redirectNonAuthPath={routesPaths.auth.login}>
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
