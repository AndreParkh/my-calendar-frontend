import styles from './TimeGrid.module.css'
import { DayColumnMemo } from '@/components/Calendar/Columns/DayColumn/DayColumn.tsx'
import { memo } from 'react'
import { v4 as v4uuid } from 'uuid'
import { QTY_WEEK_DAYS } from '@/constants/constants.ts'

export const TimeGrid = () => {
  const weekDayList = new Array(QTY_WEEK_DAYS).fill(null)

  return (
    <div className={styles.timeGrid}>
      {weekDayList.map(() => (
        <DayColumnMemo key={v4uuid()} />
      ))}
    </div>
  )
}

export const TimeGridMemo = memo(TimeGrid)
