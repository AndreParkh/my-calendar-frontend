import { createDate, CustomDate } from '@/functions/createDate.ts'
import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'
import { useCallback, useMemo } from 'react'

export const useCustomMonth = (date: Date) => {
  const convertedDate = useMemo(() => createDate(date), [date])
  const { monthName, year, monthNumber, monthIndex } = convertedDate

  const getDay = useCallback(
    (dayNumber: number): CustomDate =>
      createDate(new Date(year, monthIndex, dayNumber)),
    [year, monthIndex],
  )

  const createMonthDayList = useCallback((): CustomDate[] => {
    const qtyMonthDays = getQtyDaysOfMonth(monthIndex, year)
    return new Array(qtyMonthDays).fill(null).reduce((acc, _, idx) => {
      acc.push(getDay(idx + 1))
      return acc
    }, [])
  }, [monthIndex, year, getDay])

  const resultMemo = useMemo(
    () => ({
      monthName,
      monthIndex,
      monthNumber,
      year,
      createMonthDayList,
    }),
    [monthName, monthIndex, monthNumber, year, createMonthDayList],
  )

  return resultMemo
}
