import styles from './TimeTracker.module.css'
import { useFormatTime } from '@/hooks/useFormatTime.ts'
import { useState } from 'react'
import { usePositionByTime } from '@/hooks/usePositionByTime.ts'

export const TimeTracker = () => {
  const [date, setDate] = useState(new Date())

  const intervalId = setInterval(() => {
    clearInterval(intervalId)
    setDate(new Date())
  }, 1000)

  const { position } = usePositionByTime(date)
  const { formatTime } = useFormatTime(date)
  const formatedTime = formatTime('HH:mm')

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
