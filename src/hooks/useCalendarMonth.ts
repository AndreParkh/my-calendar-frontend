import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'
import { QTY_WEEK_DAYS } from '@/constants/constants.ts'
import { useCustomMonth } from '@/hooks/useCustomMonth.ts'
import { useMemo } from 'react'
import { createDate } from '@/functions/createDate.ts'

export const useCalendarMonth = (date: Date) => {
  const { monthIndex, year } = useMemo(() => createDate(date), [date])
  const qtyDaysOfMonth = useMemo(
    () => getQtyDaysOfMonth(monthIndex, year),
    [monthIndex, year],
  )

  const prevMonthDayList = useCustomMonth(
    new Date(year, monthIndex - 1),
  ).createMonthDayList()
  const nextMonthDayList = useCustomMonth(
    new Date(year, monthIndex + 1),
  ).createMonthDayList()
  const dayList = useCustomMonth(
    new Date(year, monthIndex),
  ).createMonthDayList()

  const firstDay = dayList[0]
  const lastDay = dayList[qtyDaysOfMonth - 1]

  const firstDayIsSunday = useMemo(
    () => firstDay.weekDayNumber === 0,
    [firstDay],
  )
  const lastDayIsSunday = useMemo(() => lastDay.weekDayNumber === 0, [lastDay])

  const qtyPrevDays = useMemo(
    () => (firstDayIsSunday ? QTY_WEEK_DAYS - 1 : firstDay.weekDayNumber - 1),
    [firstDay, firstDayIsSunday],
  )

  const qtyNextDays = useMemo(
    () => (lastDayIsSunday ? 0 : QTY_WEEK_DAYS - lastDay.weekDayNumber),
    [lastDay, lastDayIsSunday],
  )

  const result = []

  for (let i = qtyPrevDays; i > 0; i--) {
    result.push(prevMonthDayList[prevMonthDayList.length - i])
  }

  for (let i = 0; i < qtyDaysOfMonth; i++) {
    result.push(dayList[i])
  }

  for (let i = 0; i < qtyNextDays; i++) {
    result.push(nextMonthDayList[i])
  }

  return result
}
