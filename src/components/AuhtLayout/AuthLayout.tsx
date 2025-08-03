import styles from './AuthLayout.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { Slider } from '@/components'
import { useEffect } from 'react'
import { useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'

export const AuthLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useAppSelector(selectAuthToken)
  const searchParam = new URLSearchParams(location.search)
  const redirectTo = searchParam.get('redirect') || '/app'

  useEffect(() => {
    if (token) {
      navigate(redirectTo, { replace: true })
    }
  }, [navigate, token, redirectTo])

  if (token) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Slider />
        <div className={styles.divider} />
        <Outlet />
      </div>
    </div>
  )
}
