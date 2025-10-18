import styles from './DashboardHeader.module.css'
import { createWeek } from '@/functions/createWeek.ts'
import { DateCell } from '@/components/Calendar/Cells/DateCell/DateCell.tsx'
import { TimeCell } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'

export const DashboardHeader = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = createWeek(new Date(selectedDate))

  return (
    <div className={styles.dashboardHeader}>
      <TimeCell isHeader />
      {weekDayList.map((date, idx) => (
        <DateCell date={date} key={idx} />
      ))}
    </div>
  )
}
