import { useMemo } from 'react'
import { coefficient } from '@/constants/constants.ts'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const usePositionByTime = (date: Date = new Date()) => {
  const { createDate } = useCustomDate()
  const { year, monthIndex, dayNumber } = createDate(date)

  const tonight = useMemo(
    () => new Date(year, monthIndex, dayNumber),
    [year, monthIndex, dayNumber],
  )

  const minutesSinceMidnight = useMemo(
    () => (date.getTime() - tonight.getTime()) / 1000 / 60,
    [date, tonight],
  )

  const position = useMemo(
    () => Math.round(minutesSinceMidnight * coefficient),
    [minutesSinceMidnight],
  )

  const resultMemo = useMemo(
    () => ({
      minutesSinceMidnight,
      position,
    }),
    [minutesSinceMidnight, position],
  )

  return resultMemo
}
