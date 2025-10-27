import styles from './DashboardHeader.module.css'
import { useCalendarWeek } from '@/hooks/useCalendarWeek.ts'
import { DateCellMemo } from '@/components/Calendar/Cells/DateCell/DateCell.tsx'
import { TimeCellMemo } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { memo } from 'react'
import { v4 as v4uuid } from 'uuid'

const DashboardHeader = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = useCalendarWeek(new Date(selectedDate))

  return (
    <div className={styles.dashboardHeader}>
      <TimeCellMemo isHeader />
      {weekDayList.map((date) => (
        <DateCellMemo date={date} key={v4uuid()} />
      ))}
    </div>
  )
}

export const DashboardHeaderMemo = memo(DashboardHeader)
