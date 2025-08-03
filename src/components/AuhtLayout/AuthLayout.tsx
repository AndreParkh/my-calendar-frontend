import styles from './AuthLayout.module.css'
import { Outlet, useLoaderData, useNavigate } from 'react-router'
import { Slider } from '@/components'
import { useEffect } from 'react'

export const AuthLayout = () => {
  const navigate = useNavigate()
  const { token, redirectTo } = useLoaderData<Record<string, string>>()
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
