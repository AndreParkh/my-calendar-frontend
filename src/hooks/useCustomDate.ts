import { LOCAL } from '@/constants/constants.ts'
import { useMemo } from 'react'

export const useCustomDate = (date: Date = new Date()) => {
  const dayNumber = useMemo(() => date.getDate(), [date])
  const weekDayNumber = useMemo(() => date.getDay(), [date])
  const weekDayName = useMemo(
    () => date.toLocaleDateString(LOCAL, { weekday: 'short' }),
    [date],
  )

  const year = useMemo(() => date.getFullYear(), [date])

  const monthIndex = useMemo(() => date.getMonth(), [date])
  const monthNumber = useMemo(() => monthIndex + 1, [monthIndex])
  const monthName = useMemo(
    () => date.toLocaleDateString(LOCAL, { month: 'long' }),
    [date],
  )

  return {
    date,
    dayNumber,
    weekDayNumber,
    weekDayName,
    year,
    monthIndex,
    monthNumber,
    monthName,
  }
}

export type CustomDate = ReturnType<typeof useCustomDate>
