import styles from './WeekDashboard.module.css'
import { Toolbar } from '@/components/WeekDashboard/Toolbar/Toolbar.tsx'
import { DashboardFieldMemo } from '@/components/WeekDashboard/DashboardField/DashboardField.tsx'
import { useCalendarWeek } from '@/hooks/useCalendarWeek.ts'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { setShownWeek } from '@/store/reducers/calendarSlice.ts'

export const WeekDashboard = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const weekDayList = useCalendarWeek(new Date(selectedDate))
  const weekDayListString = weekDayList.map((date) => date.toISOString())
  const dispatch = useAppDispatch()
  dispatch(setShownWeek(weekDayListString))

  return (
    <div className={styles.weekDashboard}>
      <Toolbar />
      <DashboardFieldMemo />
    </div>
  )
}
