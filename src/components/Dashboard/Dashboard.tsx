import styles from './Dashboard.module.css'
import { CalendarWidget } from '@/components/CalendarWidget/CalendarWidget.tsx'
import { WeekDashboard } from '@/components/Calendar/WeekDashboard.tsx'

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <CalendarWidget />
      </div>
      <div className={styles.content}>
        <WeekDashboard />
      </div>
    </div>
  )
}
