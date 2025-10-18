import styles from './WeekDashboard.module.css'
import { Toolbar } from '@/components/Calendar/Toolbar/Toolbar.tsx'
import { DashboardField } from '@/components/Calendar/DashboardField/DashboardField.tsx'

export const WeekDashboard = () => {
  return (
    <div className={styles.weekDashboard}>
      <Toolbar />
      <DashboardField />
    </div>
  )
}
