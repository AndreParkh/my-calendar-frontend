import styles from './DayColumn.module.css'
import { QTY_HOURS } from '@/constants/constants.ts'

const QTY_HOUR_PARTS = 4

export const DayColumn = () => {
  const timeList = new Array(QTY_HOURS * QTY_HOUR_PARTS).fill('')

  return (
    <div className={styles.dayColumn}>
      {timeList.map((_, index) => (
        <div className={styles.cell} key={index} />
      ))}
    </div>
  )
}
