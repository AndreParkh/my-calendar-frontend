import { createDate } from '@/functions/createDate.ts'
import { QTY_WEEK_DAYS } from '@/constants/constants.ts'
import { useMemo } from 'react'

export const useCalendarWeek = (date: Date): Date[] => {
  const { weekDayNumber, dayNumber, monthIndex, year } = useMemo(
    () => createDate(date),
    [date],
  )

  const isSunday = weekDayNumber === 0
  const qtyDaysBefore = isSunday ? QTY_WEEK_DAYS - 1 : weekDayNumber - 1
  const qtyDaysAfter = isSunday ? 0 : QTY_WEEK_DAYS - weekDayNumber

  const weekDays = []
  for (let i = qtyDaysBefore; i > 0; i--) {
    weekDays.push(new Date(year, monthIndex, dayNumber - i))
  }

  for (let i = 0; i <= qtyDaysAfter; i++) {
    weekDays.push(new Date(year, monthIndex, dayNumber + i))
  }

  return weekDays
}
