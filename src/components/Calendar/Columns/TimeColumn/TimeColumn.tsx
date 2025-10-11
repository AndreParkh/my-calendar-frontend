import styles from './TImeColumn.module.css'
import { TimeCell } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TimeColumnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  timeList: string[]
}

export const TimeColumn = ({ timeList }: TimeColumnProps) => {
  return (
    <div className={styles.timeColumn}>
      {timeList.map((time, index) => (
        <TimeCell key={index}>{time}</TimeCell>
      ))}
    </div>
  )
}
