import styles from './Dashboard.module.css'
import { CalendarWidget } from '@/components/CalendarWidget/CalendarWidget.tsx'
import { WeekDashboard } from '@/components/WeekDashboard/WeekDashboard.tsx'
import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { fetchEventsThunk } from '@/store/thunks/fetchEventsThunk.ts'
import { selectSelectedDate } from '@/store/selectors.ts'

export const Dashboard = () => {
  const dispatch = useAppDispatch()
  const selectedDateStr = useAppSelector(selectSelectedDate)
  const selectedDate = useMemo(
    () => new Date(selectedDateStr),
    [selectedDateStr],
  )

  useEffect(() => {
    const startDateRequest = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1,
    )
    const endDateRequest = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0,
    )

    const dates = {
      start: startDateRequest,
      end: endDateRequest,
    }

    dispatch(fetchEventsThunk(dates))
  }, [dispatch, selectedDate])

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <CalendarWidget />
      </div>
      <div className={styles.content}>
        <WeekDashboard />
      </div>
    </div>
  )
}
