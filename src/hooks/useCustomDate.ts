import { LOCAL } from '@/constants/constants.ts'
import { useCallback } from 'react'
import { getQtyDaysOfMonth } from '@/functions/getQtyDaysOfMonth.ts'

type FormatTime = 'HH:mm' | 'HH:mm:ss'

export const useCustomDate = () => {
  const createDate = useCallback((date: Date = new Date()) => {
    const dayNumber = date.getDate()
    const weekDayNumber = date.getDay()
    const weekDayName = date.toLocaleDateString(LOCAL, { weekday: 'short' })

    const year = date.getFullYear()

    const monthIndex = date.getMonth()
    const monthNumber = monthIndex + 1
    const monthName = date.toLocaleDateString(LOCAL, { month: 'long' })

    const hour = ('00' + date.getHours()).slice(-2)
    const minute = ('00' + date.getMinutes()).slice(-2)
    const second = ('00' + date.getSeconds()).slice(-2)

    const dateUtc = new Date(Date.UTC(year, monthIndex, dayNumber))

    return {
      date,
      dateUtc,
      dayNumber,
      weekDayNumber,
      weekDayName,
      year,
      monthIndex,
      monthNumber,
      monthName,
      hour,
      minute,
      second,
    }
  }, [])

  type CustomDate = ReturnType<typeof createDate>

  const createMonth = useCallback(
    (date: Date) => {
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
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDayList,
      }
    },
    [createDate],
  )

  const formatTime = useCallback(
    (date: Date = new Date(), format: FormatTime) => {
      const convertedDate = createDate(date)

      const { hour, minute, second } = convertedDate
      switch (format) {
        case 'HH:mm':
          return `${hour}:${minute}`
        case 'HH:mm:ss':
          return `${hour}:${minute}:${second}`
        default:
          return null
      }
    },
    [createDate],
  )

  const checkIsToday = useCallback(
    (date: CustomDate) => {
      const today = createDate()

      return (
        date.year === today.year &&
        date.monthIndex === today.monthIndex &&
        date.dayNumber === today.dayNumber
      )
    },
    [createDate],
  )

  return { createDate, createMonth, formatTime, checkIsToday }
}

export type CustomDate = ReturnType<
  ReturnType<typeof useCustomDate>['createDate']
>
