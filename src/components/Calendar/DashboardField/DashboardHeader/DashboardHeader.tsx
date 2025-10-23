import styles from './DashboardHeader.module.css'
import { createWeek } from '@/functions/createWeek.ts'
import { DateCellMemo } from '@/components/Calendar/Cells/DateCell/DateCell.tsx'
import { TimeCellMemo } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { memo, useMemo } from 'react'

const DashboardHeader = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = useMemo(
    () => createWeek(new Date(selectedDate)),
    [selectedDate],
  )

  return (
    <div className={styles.dashboardHeader}>
      <TimeCellMemo isHeader />
      {weekDayList.map((date, idx) => (
        <DateCellMemo date={date} key={idx} />
      ))}
    </div>
  )
}

export const DashboardHeaderMemo = memo(DashboardHeader)
