import styles from './WeekDashboard.module.css'
import { TimeColumn } from '@/components/Calendar/Columns/TimeColumn/TimeColumn.tsx'
import { DayColumn } from '@/components/Calendar/Columns/DayColumn/DayColumn.tsx'
import { createWeek } from '@/functions/createWeek.ts'
import { createTimeList } from '@/functions/createTimeList.ts'
import { QTY_HOURS } from '@/constants/constants.ts'
import { Toolbar } from '@/components/Calendar/Toolbar/Toolbar.tsx'
import { DateCell } from '@/components/Calendar/Cells/DateCell/DateCell.tsx'
import { TimeCell } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'

export const WeekDashboard = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const timeList = createTimeList(QTY_HOURS)
  const weekDayList = createWeek(new Date(selectedDate))

  return (
    <div className={styles.weekDashboard}>
      <Toolbar />
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeaderColumn}>
          <TimeCell isHeader />
        </div>
        {weekDayList.map((date, idx) => (
          <div className={styles.dashboardHeaderColumn} key={idx}>
            <DateCell date={date} />
          </div>
        ))}
      </div>
      <div className={styles.dashboard}>
        <TimeColumn title={''} timeList={timeList} />
        {weekDayList.map((_, idx) => (
          <DayColumn key={idx} />
        ))}
      </div>
    </div>
  )
}
