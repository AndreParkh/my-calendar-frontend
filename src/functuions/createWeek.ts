import { createDate } from '@/functuions/createDate.ts'

export const createWeek = (date: Date) => {
  const myDate = createDate(date)

  const qtyDaysBefore = myDate.weekDayNumber - 1
  const qtyDaysAfter = 7 - myDate.weekDayNumber

  const weekDays = []

  for (let i = qtyDaysBefore; i > 0; i--) {
    weekDays.push(
      createDate(
        new Date(myDate.year, myDate.monthIndex, myDate.dayNumber - i + 1),
      ).date,
    )
  }

  for (let i = 0; i <= qtyDaysAfter; i++) {
    weekDays.push(
      createDate(
        new Date(myDate.year, myDate.monthIndex, myDate.dayNumber + i + 1),
      ).date,
    )
  }

  return weekDays
}
