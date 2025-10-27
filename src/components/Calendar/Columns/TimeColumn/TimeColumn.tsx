import styles from './TImeColumn.module.css'
import { TimeCellMemo } from '@/components/Calendar/Cells/TimeCell/TimeCell.tsx'
import { DetailedHTMLProps, HTMLAttributes, memo } from 'react'
import { v4 as v4uuid } from 'uuid'

export interface TimeColumnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  timeList: string[]
}

const TimeColumn = ({ timeList }: TimeColumnProps) => {
  return (
    <div className={styles.timeColumn}>
      {timeList.map((time) => (
        <TimeCellMemo key={v4uuid()}>{time}</TimeCellMemo>
      ))}
    </div>
  )
}

export const TimeColumnMemo = memo(TimeColumn)
