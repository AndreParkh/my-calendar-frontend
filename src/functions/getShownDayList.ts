import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'
import { createMonth, MonthObj } from '@/functions/createMonth.ts'
import { QTY_WEEK_DAYS } from '@/constants/constants.ts'

export const getShownDayList = (month: MonthObj, year: number) => {
  const qtyDaysOfMonth = getQtyDaysOfMonth(month.monthIndex, year)

  const prevMonthDayList = createMonth(
    new Date(year, month.monthIndex - 1),
  ).createMonthDayList()
  const nextMonthDayList = createMonth(
    new Date(year, month.monthIndex + 1),
  ).createMonthDayList()
  const dayList = createMonth(
    new Date(year, month.monthIndex),
  ).createMonthDayList()

  const firstDay = dayList[0]
  const lastDay = dayList[qtyDaysOfMonth - 1]

  const firstDayIsSunday = firstDay.weekDayNumber === 0
  const lastDayIsSunday = lastDay.weekDayNumber === 0

  const qtyPrevDays = firstDayIsSunday
    ? QTY_WEEK_DAYS - 1
    : firstDay.weekDayNumber - 1
  const qtyNextDays = lastDayIsSunday
    ? 0
    : QTY_WEEK_DAYS - lastDay.weekDayNumber

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
