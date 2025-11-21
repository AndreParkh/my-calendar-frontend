import styles from './TimeCell.module.css'
import { memo, ReactNode } from 'react'
import cn from 'classnames'

export interface TimeCellProps {
  children?: ReactNode
  isHeader?: boolean
}

const TimeCell = ({ children, isHeader }: TimeCellProps) => {
  return (
    <div className={cn(styles.timeCell, { [styles.header]: isHeader })}>
      {children}
    </div>
  )
}

export const TimeCellMemo = memo(TimeCell)
