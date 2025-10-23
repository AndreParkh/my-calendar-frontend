import { createDate, CustomDate } from '@/functions/createDate.ts'
import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'

export const createMonth = (date: Date) => {
  const convertedDate = createDate(date)
  const { monthName, year, monthNumber, monthIndex } = convertedDate

  const getDay = (dayNumber: number): CustomDate =>
    createDate(new Date(year, monthIndex, dayNumber))

  const createMonthDayList = (): CustomDate[] => {
    const qtyMonthDays = getQtyDaysOfMonth(monthIndex, year)
    return new Array(qtyMonthDays).fill(null).reduce((acc, _, idx) => {
      acc.push(getDay(idx + 1))
      return acc
    }, [])
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

export type CustomMonth = ReturnType<typeof createMonth>
