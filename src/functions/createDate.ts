import { LOCAL } from '@/constants/constants.ts'

export const createDate = (date: Date = new Date()) => {
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

  return {
    date,
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
}

export type CustomDate = ReturnType<typeof createDate>
