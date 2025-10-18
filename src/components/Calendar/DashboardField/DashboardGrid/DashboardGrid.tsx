import styles from './DashboardGrid.module.css'
import { TimeColumn } from '@/components/Calendar/Columns/TimeColumn/TimeColumn.tsx'
import { createTimeList } from '@/functions/createTimeList.ts'
import { QTY_HOURS } from '@/constants/constants.ts'
import { TimeGrid } from '@/components/Calendar/DashboardField/DashboardGrid/TimeGrid/TimeGrid.tsx'
import { TimeTracker } from '@/components/Calendar/TimeTracker/TimeTracker.tsx'

export const DashboardGrid = () => {
  const timeList = createTimeList(QTY_HOURS)

  return (
    <div className={styles.dashboardGrid}>
      <TimeColumn title={''} timeList={timeList} />
      <div className={styles.timeFieldContainer}>
        <TimeTracker />
        <TimeGrid />
      </div>
    </div>
  )
}
