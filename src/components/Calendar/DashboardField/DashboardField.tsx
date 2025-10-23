import styles from './DashboardField.module.css'
import { DashboardHeaderMemo } from '@/components/Calendar/DashboardField/DashboardHeader/DashboardHeader.tsx'
import { DashboardGridMemo } from '@/components/Calendar/DashboardField/DashboardGrid/DashboardGrid.tsx'
import { memo } from 'react'

const DashboardField = () => {
  return (
    <div className={styles.dashboardField}>
      <DashboardHeaderMemo />
      <DashboardGridMemo />
    </div>
  )
}

export const DashboardFieldMemo = memo(DashboardField)
