import { createDate } from '@/functions/createDate.ts'
import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'

export const createMonth = (date: Date) => {
  const dateObj = createDate(date)
  const { monthName, year, monthNumber, monthIndex } = dateObj

  const getDay = (dayNumber: number) =>
    createDate(new Date(year, monthIndex, dayNumber))

  const createMonthDayList = () => {
    const dayList = []

    for (let i = 0; i <= getQtyDaysOfMonth(monthIndex, year) - 1; i++) {
      dayList[i] = getDay(i + 1)
    }

    return dayList
  }

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDayList,
  }
}

export type MonthObj = ReturnType<typeof createMonth>
