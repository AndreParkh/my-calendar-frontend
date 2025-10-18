import styles from './TimeTracker.module.css'
import { createDate } from '@/functions/createDate.ts'

const QTY_PX_IN_HOUR = 24 * 4
const coeff = QTY_PX_IN_HOUR / 60

export const TimeTracker = () => {
  const { date: now, year, monthIndex, dayNumber } = createDate(new Date())
  const hours = ('00' + now.getHours()).slice(-2)
  const minutes = ('00' + now.getMinutes()).slice(-2)
  const tonight = new Date(year, monthIndex, dayNumber)
  const minutesSinceMidnight = (now.getTime() - tonight.getTime()) / 1000 / 60
  const position = Math.round(minutesSinceMidnight * coeff)

  return (
    <div className={styles.timeTracker} style={{ top: `${position}px` }}>
      <div className={styles.line}></div>
      <div className={styles.timeContainer}>
        {hours}:{minutes}
      </div>
    </div>
  )
}
