import { Outlet, useNavigate, useLocation } from 'react-router'
import { useEffect } from 'react'
import { routesPaths } from '@/routes.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'

export const ProtectedLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentLocation = encodeURIComponent(location.pathname)
  const redirectPath = `${routesPaths.auth.login}?redirect=${currentLocation}`
  const token = useAppSelector(selectAuthToken)

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
