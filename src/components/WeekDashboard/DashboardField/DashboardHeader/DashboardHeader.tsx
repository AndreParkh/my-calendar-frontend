import styles from './DashboardHeader.module.css'
import { DateCellMemo } from '@/components/WeekDashboard/Cells/DateCell/DateCell.tsx'
import { TimeCellMemo } from '@/components/WeekDashboard/Cells/TimeCell/TimeCell.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectShownWeek } from '@/store/selectors.ts'
import { memo } from 'react'
import { v4 as v4uuid } from 'uuid'

const DashboardHeader = () => {
  const shownWeekString = useAppSelector(selectShownWeek)
  const shownWeek = shownWeekString.map((date) => new Date(date))

  return (
    <div className={styles.dashboardHeader}>
      <TimeCellMemo isHeader />
      {shownWeek.map((date) => (
        <DateCellMemo date={date} key={v4uuid()} />
      ))}
    </div>
  )
}

export const DashboardHeaderMemo = memo(DashboardHeader)
