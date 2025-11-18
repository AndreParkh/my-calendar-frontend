import { createDate } from '@/functions/createDate.ts'
import { useCallback, useMemo } from 'react'

type FormatTime = 'HH:mm' | 'HH:mm:ss'

export const useFormatTime = (date: Date = new Date()) => {
  const convertedDate = useMemo(() => createDate(date), [date])

  const { hour, minute, second } = convertedDate

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
      formatTime,
    }),
    [formatTime],
  )

  return resultMemo
}
