import styles from './DashboardField.module.css'
import { DashboardHeader } from '@/components/Calendar/DashboardField/DashboardHeader/DashboardHeader.tsx'
import { DashboardGrid } from '@/components/Calendar/DashboardField/DashboardGrid/DashboardGrid.tsx'

export const DashboardField = () => {
  return (
    <div className={styles.dashboardField}>
      <DashboardHeader />
      <DashboardGrid />
    </div>
  )
}
