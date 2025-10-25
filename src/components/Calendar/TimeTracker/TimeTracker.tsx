import styles from './TimeTracker.module.css'
import { createDate } from '@/functions/createDate.ts'
import { QTY_BLOCKS_IN_HOUR } from '@/constants/constants.ts'

const QTY_PX_IN_HOUR = 24 * QTY_BLOCKS_IN_HOUR
const coeff = QTY_PX_IN_HOUR / 60

export const TimeTracker = () => {
  const { date: now, year, monthIndex, dayNumber } = createDate()
  const hours = ('00' + now.getHours()).slice(-2)
  const minutes = ('00' + now.getMinutes()).slice(-2)
  const tonight = new Date(year, monthIndex, dayNumber)
  const minutesSinceMidnight = (now.getTime() - tonight.getTime()) / 1000 / 60
  const position = Math.round(minutesSinceMidnight * coeff)

  return (
    <div
      className={styles.timeTracker}
      style={{ transform: `translateY(${position}px)` }}
    >
      <div className={styles.line}></div>
      <div className={styles.timeContainer}>
        {hours}:{minutes}
      </div>
    </div>
  )
}
