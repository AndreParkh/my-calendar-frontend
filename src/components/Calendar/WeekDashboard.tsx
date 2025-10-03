import styles from './WeekDashboard.module.css'
import { TimeColumn } from '@/components/Calendar/Columns/TimeColumn/TimeColumn.tsx'
import { DayColumn } from '@/components/Calendar/Columns/DayColumn/DayColumn.tsx'
import { createWeek } from '@/functuions/createWeek.ts'
import { createTimeList } from '@/functuions/createTimeList.ts'
import { QTY_HOURS } from '@/constants/constants.ts'
import { Toolbar } from '@/components/Calendar/Toolbar/Toolbar.tsx'
import { DateCell } from '@/components/Calendar/Cells/DateCell/DateCell.tsx'

export interface WeekDashboardProps {
  date: Date
}

export const WeekDashboard = ({ date }: WeekDashboardProps) => {
  const timeList = createTimeList(QTY_HOURS)
  const weekDayList = createWeek(date)

  return (
    <div className={styles.weekDashboard}>
      <Toolbar date={date}></Toolbar>
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeaderColumn}>
          <DateCell />
        </div>
        {weekDayList.map((date, idx) => (
          <div className={styles.dashboardHeaderColumn}>
            <DateCell key={idx} date={date} />
          </div>
        ))}
      </div>
      <div className={styles.dashboard}>
        <TimeColumn title={''} timeList={timeList} />
        {weekDayList.map((item, idx) => (
          <DayColumn key={idx} date={item} />
        ))}
      </div>
    </div>
  )
}
