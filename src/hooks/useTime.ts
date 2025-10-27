import { createDate } from '@/functions/createDate.ts'
import { useState } from 'react'

type FormatTime = 'HH:mm' | 'HH:mm:ss'

export const useTime = () => {
  const [convertedDate, setDate] = useState(createDate())
  const {
    date: now,
    year,
    monthIndex,
    dayNumber,
    hour,
    minute,
    second,
  } = convertedDate
  const intervalId = setInterval(() => {
    clearInterval(intervalId)
    setDate(createDate())
  }, 1000)

  const tonight = new Date(year, monthIndex, dayNumber)

  const minutesSinceMidnight = (now.getTime() - tonight.getTime()) / 1000 / 60

  const formatTime = (format: FormatTime) => {
    switch (format) {
      case 'HH:mm':
        return `${hour}:${minute}`
      case 'HH:mm:ss':
        return `${hour}:${minute}:${second}`
      default:
        return null
    }
  }

  return {
    minutesSinceMidnight,
    formatTime,
  }
}
