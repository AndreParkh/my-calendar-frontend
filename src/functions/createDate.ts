import { LOCAL } from '@/constants/constants.ts'

export const createDate = (date: Date = new Date()) => {
  const dayNumber = date.getDate()
  const weekDayNumber = date.getDay()
  const weekDayName = date.toLocaleDateString(LOCAL, { weekday: 'short' })

  const year = date.getFullYear()

  const monthIndex = date.getMonth()
  const monthNumber = monthIndex + 1
  const monthName = date.toLocaleDateString(LOCAL, { month: 'long' })

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

export type DateObj = ReturnType<typeof createDate>
