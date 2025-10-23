import styles from './DateCell.module.css'
import { createDate } from '@/functions/createDate.ts'
import cn from 'classnames'
import { memo, useMemo } from 'react'

export interface DateCellProps {
  date: Date
}

const DateCell = ({ date }: DateCellProps) => {
  const convertedDate = useMemo(() => createDate(date), [date])
  const weekDayName = convertedDate.weekDayName.toUpperCase()
  const weekDayNumber = convertedDate.dayNumber

  const today = useMemo(() => createDate(), [])
  const isToday =
    convertedDate.year === today.year &&
    convertedDate.monthIndex === today.monthIndex &&
    convertedDate.dayNumber === today.dayNumber

  return (
    <div className={cn(styles.dateCell, { [styles.today]: isToday })}>
      <span className={styles.weekName}>{weekDayName}</span>
      <span className={styles.weekNumber}>{weekDayNumber}</span>
    </div>
  )
}

export const DateCellMemo = memo(DateCell)
