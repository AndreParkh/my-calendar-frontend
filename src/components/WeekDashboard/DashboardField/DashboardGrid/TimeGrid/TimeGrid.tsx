import styles from './TimeGrid.module.css'
import { DayColumnMemo } from '@/components/WeekDashboard/Columns/DayColumn/DayColumn.tsx'
import { memo } from 'react'
import { v4 as v4uuid } from 'uuid'
import { useAppSelector } from '@/store/hooks.ts'
import { selectEvents, selectShownWeek } from '@/store/selectors.ts'
import { getOnlyDate } from '@/functions/getOnlyDate.ts'
import { useGroupEvents } from '@/hooks/useGroupEvents.ts'

export const TimeGrid = () => {
  const events = useAppSelector(selectEvents)
  const shownWeekString = useAppSelector(selectShownWeek)
  const shownWeek = shownWeekString.map((date) => new Date(date))
  const groupedEvents = useGroupEvents(events)

  return (
    <div className={styles.timeGrid}>
      {shownWeek.map((date) => {
        return (
          <DayColumnMemo
            key={v4uuid()}
            events={groupedEvents.get(getOnlyDate(date))}
          />
        )
      })}
    </div>
  )
}

export const TimeGridMemo = memo(TimeGrid)
