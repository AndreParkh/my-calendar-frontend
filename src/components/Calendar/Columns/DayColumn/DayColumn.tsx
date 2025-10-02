import styles from './DayColumn.module.css'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { HourCell } from '@/components/Calendar/Cells/HourCell/HourCell.tsx'
import { QTY_HOURS } from '@/constants/constants.ts'

export interface DayColumnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: Date
}

export const DayColumn = ({ date }: DayColumnProps) => {
  const timeList = new Array(QTY_HOURS).fill('')

  return (
    <div className={styles.dayColumn}>
      {timeList.map((_, index) => (
        <HourCell key={index} />
      ))}
    </div>
  )
}
