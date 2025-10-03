import styles from './DateCell.module.css'
import { createDate } from '@/functuions/createDate.ts'

export interface DateCellProps {
  date?: Date
}

export const DateCell = ({ date }: DateCellProps) => {
  const weekDayName = createDate(date).weekDayName.toUpperCase()
  const weekDayNumber = createDate(date).dayNumber

  return (
    <div className={styles.dateCell}>
      <p className={styles.weekName}>{date && weekDayName}</p>
      <p className={styles.weekNumber}>{date && weekDayNumber}</p>
    </div>
  )
}
