import { Outlet, useNavigate, useLoaderData, useLocation } from 'react-router'
import { useEffect } from 'react'
import { routesPaths } from '@/routes.tsx'

export const ProtectedLayout = () => {
  const navigate = useNavigate()
  const token = useLoaderData<string>()
  const location = useLocation()
  const currentLocation = encodeURIComponent(location.pathname)
  const redirectPath = `${routesPaths.auth.login}?redirect=${currentLocation}`

  useEffect(() => {
    if (!token) navigate(redirectPath, { replace: true })
  }, [navigate, token, redirectPath])

  if (!token) return null

  return (
    <main>
      <Outlet />
    </main>
  )
}
