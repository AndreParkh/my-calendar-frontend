import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'
import { ReactNode, useEffect } from 'react'
import { authorizedUserThunk } from '@/store/thunks/authorizedUserThunk.ts'

interface ProtectedLayoutProps {
  children?: ReactNode
  redirectAuthPath?: string
  redirectNonAuthPath?: string
}

export const ProtectedRoute = ({
  redirectAuthPath,
  redirectNonAuthPath,
  children,
}: ProtectedLayoutProps) => {
  const token = useAppSelector(selectAuthToken)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!token && redirectNonAuthPath) {
      navigate(redirectNonAuthPath, { replace: true })
    }
  }, [token, navigate, redirectNonAuthPath])

  useEffect(() => {
    if (token && redirectAuthPath) {
      navigate(redirectAuthPath, { replace: true })
    }
  }, [token, navigate, redirectAuthPath, dispatch])

  if (token) {
    dispatch(authorizedUserThunk())
  }

  if ((!token && redirectNonAuthPath) || (token && redirectAuthPath)) {
    return null
  }

  return <>{children}</>
}
