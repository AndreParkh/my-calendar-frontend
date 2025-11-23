import styles from './DateCell.module.css'
import cn from 'classnames'
import { memo, useMemo } from 'react'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export interface DateCellProps {
  date: Date
}

const DateCell = ({ date }: DateCellProps) => {
  const { createDate } = useCustomDate()
  const { year, monthIndex, weekDayName, dayNumber } = useMemo(
    () => createDate(date),
    [date, createDate],
  )
  const weekDayNameUC = weekDayName.toUpperCase()

  const today = useMemo(() => createDate(), [createDate])
  const isToday = useMemo(
    () =>
      year === today.year &&
      monthIndex === today.monthIndex &&
      dayNumber === today.dayNumber,
    [year, monthIndex, dayNumber, today],
  )

  return (
    <div className={cn(styles.dateCell, { [styles.today]: isToday })}>
      <span className={styles.weekName}>{weekDayNameUC}</span>
      <span className={styles.weekNumber}>{dayNumber}</span>
    </div>
  )
}

export const DateCellMemo = memo(DateCell)
