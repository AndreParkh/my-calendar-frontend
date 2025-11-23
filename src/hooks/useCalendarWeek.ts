import { QTY_WEEK_DAYS } from '@/constants/constants.ts'
import { useMemo } from 'react'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const useCalendarWeek = (date: Date): Date[] => {
  const { createDate } = useCustomDate()
  const { weekDayNumber, dayNumber, monthIndex, year } = useMemo(
    () => createDate(date),
    [date, createDate],
  )

  const isSunday = useMemo(() => weekDayNumber === 0, [weekDayNumber])
  const qtyDaysBefore = useMemo(
    () => (isSunday ? QTY_WEEK_DAYS - 1 : weekDayNumber - 1),
    [isSunday, weekDayNumber],
  )
  const qtyDaysAfter = useMemo(
    () => (isSunday ? 0 : QTY_WEEK_DAYS - weekDayNumber),
    [isSunday, weekDayNumber],
  )

  const weekDays = []
  for (let i = qtyDaysBefore; i > 0; i--) {
    weekDays.push(new Date(year, monthIndex, dayNumber - i))
  }

  for (let i = 0; i <= qtyDaysAfter; i++) {
    weekDays.push(new Date(year, monthIndex, dayNumber + i))
  }

  return weekDays
}
