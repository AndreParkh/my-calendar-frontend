import { createDate } from '@/functions/createDate.ts'
import { QTY_WEEK_DAYS } from '@/constants/constants.ts'

export const createWeek = (date: Date) => {
  const myDate = createDate(date)

  const isSunday = myDate.weekDayNumber === 0
  const qtyDaysBefore = isSunday ? QTY_WEEK_DAYS - 1 : myDate.weekDayNumber - 1
  const qtyDaysAfter = isSunday ? 0 : QTY_WEEK_DAYS - myDate.weekDayNumber
  const weekDays = []

  for (let i = qtyDaysBefore; i > 0; i--) {
    weekDays.push(
      new Date(myDate.year, myDate.monthIndex, myDate.dayNumber - i),
    )
  }

  for (let i = 0; i <= qtyDaysAfter; i++) {
    weekDays.push(
      new Date(myDate.year, myDate.monthIndex, myDate.dayNumber + i),
    )
  }

  return weekDays
}
