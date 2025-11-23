import styles from './TimeGrid.module.css'
import { DayColumnMemo } from '@/components/WeekDashboard/Columns/DayColumn/DayColumn.tsx'
import { memo, useMemo } from 'react'
import { v4 as v4uuid } from 'uuid'
import { useAppSelector } from '@/store/hooks.ts'
import { selectEvents, selectShownWeek } from '@/store/selectors.ts'
import { getOnlyDate } from '@/functions/getOnlyDate.ts'
import { useGroupEvents } from '@/hooks/useGroupEvents.ts'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const TimeGrid = () => {
  const events = useAppSelector(selectEvents)
  const storedShownWeek = useAppSelector(selectShownWeek)
  const { createDate } = useCustomDate()
  const shownWeek = useMemo(
    () => storedShownWeek.map((date) => createDate(new Date(date)).dateUtc),
    [storedShownWeek, createDate],
  )
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
