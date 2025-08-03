import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { routesPaths } from '@/routes.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'

export const ProtectedLayout = () => {
  const navigate = useNavigate()
  const token = useAppSelector(selectAuthToken)

  useEffect(() => {
    if (!token) navigate(routesPaths.auth.login, { replace: true })
  }, [navigate, token])

  if (!token) return null

  return (
    <main>
      <Outlet />
    </main>
  )
}
