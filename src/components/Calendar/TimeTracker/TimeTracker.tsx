import styles from './TimeTracker.module.css'
import { QTY_BLOCKS_IN_HOUR } from '@/constants/constants.ts'
import { useTime } from '@/hooks/useTime.ts'

const QTY_PX_IN_BLOCK = 24
const QTY_PX_IN_HOUR = QTY_PX_IN_BLOCK * QTY_BLOCKS_IN_HOUR
const QTY_MIN_IN_HOURS = 60
const coefficient = QTY_PX_IN_HOUR / QTY_MIN_IN_HOURS

export const TimeTracker = () => {
  const { minutesSinceMidnight, formatTime } = useTime()

  const position = Math.round(minutesSinceMidnight * coefficient)
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
