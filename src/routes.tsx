import { RouteObject } from 'react-router-dom'
import {
  App,
  AuthLayout,
  CatchAll,
  Error,
  Login,
  Register,
  User,
} from '@/components'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'auth',
        Component: AuthLayout,
        children: [
          { path: 'login', Component: Login },
          { path: 'register', Component: Register },
        ],
      },
      { path: 'app', Component: User, errorElement: <Error /> },
    ],
  },
  {
    path: '*?',
    Component: CatchAll,
  },
]
