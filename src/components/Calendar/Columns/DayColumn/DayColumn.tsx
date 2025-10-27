import styles from './DayColumn.module.css'
import { QTY_BLOCKS_IN_HOUR, QTY_HOURS } from '@/constants/constants.ts'
import { memo, useMemo } from 'react'
import { v4 as v4uuid } from 'uuid'

const DayColumn = () => {
  const timeList = useMemo(
    () => new Array(QTY_HOURS * QTY_BLOCKS_IN_HOUR).fill(''),
    [],
  )

  return (
    <div className={styles.dayColumn}>
      {timeList.map(() => (
        <div className={styles.cell} key={v4uuid()} />
      ))}
    </div>
  )
}

export const DayColumnMemo = memo(DayColumn)
