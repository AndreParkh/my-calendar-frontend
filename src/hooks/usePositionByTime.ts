import { createDate } from '@/functions/createDate.ts'
import { useMemo } from 'react'
import { coefficient } from '@/constants/constants.ts'

export const usePositionByTime = (date: Date = new Date()) => {
  const { year, monthIndex, dayNumber } = createDate(date)

  const tonight = useMemo(
    () => new Date(year, monthIndex, dayNumber),
    [year, monthIndex, dayNumber],
  )

  const minutesSinceMidnight = useMemo(
    () => (date.getTime() - tonight.getTime()) / 1000 / 60,
    [date, tonight],
  )

  const position = Math.round(minutesSinceMidnight * coefficient)

  const resultMemo = useMemo(
    () => ({
      minutesSinceMidnight,
      position,
    }),
    [minutesSinceMidnight, position],
  )

  return resultMemo
}
