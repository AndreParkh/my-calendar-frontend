import styles from './TimeGrid.module.css'
import { DayColumnMemo } from '@/components/Calendar/Columns/DayColumn/DayColumn.tsx'
import { createWeek } from '@/functions/createWeek.ts'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { memo, useMemo } from 'react'

export const TimeGrid = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = useMemo(
    () => createWeek(new Date(selectedDate)),
    [selectedDate],
  )

  return (
    <div className={styles.timeGrid}>
      {weekDayList.map((_, idx) => (
        <DayColumnMemo key={idx} />
      ))}
    </div>
  )
}

export const TimeGridMemo = memo(TimeGrid)
