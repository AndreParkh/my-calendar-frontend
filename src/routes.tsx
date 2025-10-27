import { RouteObject } from 'react-router-dom'
import {
  App,
  CatchAll,
  UserError,
  Login,
  ProtectedRoute,
  Register,
  AuthLayout,
} from '@/components'
import { Dashboard } from '@/components/Dashboard/Dashboard.tsx'

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
        path: 'dashboard',
        element: (
          <ProtectedRoute redirectNonAuthPath={routesPaths.auth.login}>
            <Dashboard />
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
