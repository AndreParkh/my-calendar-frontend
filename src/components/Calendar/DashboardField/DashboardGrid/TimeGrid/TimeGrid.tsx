import styles from './TimeGrid.module.css'
import { DayColumn } from '@/components/Calendar/Columns/DayColumn/DayColumn.tsx'
import { createWeek } from '@/functions/createWeek.ts'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'

export const TimeGrid = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = createWeek(new Date(selectedDate))

  return (
    <div className={styles.timeGrid}>
      {weekDayList.map((_, idx) => (
        <DayColumn key={idx} />
      ))}
    </div>
  )
}
