import styles from './DateCell.module.css'
import { createDate } from '@/functions/createDate.ts'
import cn from 'classnames'

export interface DateCellProps {
  date: Date
}

export const DateCell = ({ date }: DateCellProps) => {
  const dateObj = createDate(date)
  const weekDayName = dateObj.weekDayName.toUpperCase()
  const weekDayNumber = dateObj.dayNumber

  const today = createDate()
  const isToday =
    dateObj.year === today.year &&
    dateObj.monthIndex === today.monthIndex &&
    dateObj.dayNumber === today.dayNumber

  return (
    <div className={cn(styles.dateCell, { [styles.today]: isToday })}>
      <p className={styles.weekName}>{weekDayName}</p>
      <p className={styles.weekNumber}>{weekDayNumber}</p>
    </div>
  )
}
