import { Outlet } from 'react-router'
import styles from './AuthLayout.module.css'
import { Slider } from '@/components'

export const AuthLayout = () => {
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
