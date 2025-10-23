import styles from './DashboardGrid.module.css'
import { TimeColumnMemo } from '@/components/Calendar/Columns/TimeColumn/TimeColumn.tsx'
import { createTimeList } from '@/functions/createTimeList.ts'
import { QTY_HOURS } from '@/constants/constants.ts'
import { TimeGridMemo } from '@/components/Calendar/DashboardField/DashboardGrid/TimeGrid/TimeGrid.tsx'
import { TimeTracker } from '@/components/Calendar/TimeTracker/TimeTracker.tsx'
import { memo, useMemo } from 'react'

const DashboardGrid = () => {
  const timeList = useMemo(() => createTimeList(QTY_HOURS), [])

  return (
    <div className={styles.dashboardGrid}>
      <TimeColumnMemo timeList={timeList} />
      <div className={styles.timeFieldContainer}>
        <TimeTracker />
        <TimeGridMemo />
      </div>
    </div>
  )
}

export const DashboardGridMemo = memo(DashboardGrid)
