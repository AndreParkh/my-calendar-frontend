import styles from './TimeTracker.module.css'
import { useState } from 'react'
import { usePositionByTime } from '@/hooks/usePositionByTime.ts'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const TimeTracker = () => {
  const [date, setDate] = useState(new Date())
  const { formatTime } = useCustomDate()

  const intervalId = setInterval(() => {
    clearInterval(intervalId)
    setDate(new Date())
  }, 1000)

  const { position } = usePositionByTime(date)
  const formatedTime = formatTime(date, 'HH:mm')

  return (
    <div
      className={styles.timeTracker}
      style={{ transform: `translateY(${position}px)` }}
    >
      <div className={styles.line}></div>
      <div className={styles.timeContainer}>{formatedTime}</div>
    </div>
  )
}
