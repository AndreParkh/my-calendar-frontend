import { createDate } from '@/functions/createDate.ts'
import { useCallback, useMemo, useState } from 'react'

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

  const tonight = useMemo(
    () => new Date(year, monthIndex, dayNumber),
    [year, monthIndex, dayNumber],
  )

  const minutesSinceMidnight = useMemo(
    () => (now.getTime() - tonight.getTime()) / 1000 / 60,
    [now, tonight],
  )

  const formatTime = useCallback(
    (format: FormatTime) => {
      switch (format) {
        case 'HH:mm':
          return `${hour}:${minute}`
        case 'HH:mm:ss':
          return `${hour}:${minute}:${second}`
        default:
          return null
      }
    },
    [hour, minute, second],
  )

  const resultMemo = useMemo(
    () => ({
      minutesSinceMidnight,
      formatTime,
    }),
    [minutesSinceMidnight, formatTime],
  )

  return resultMemo
}
