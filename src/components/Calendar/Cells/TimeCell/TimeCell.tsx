import styles from './TimeCell.module.css'
import { ReactNode } from 'react'
import cn from 'classnames'

export interface TimeCellProps {
  children?: ReactNode
  isHeader?: boolean
}

export const TimeCell = ({ children, isHeader }: TimeCellProps) => {
  return (
    <div className={cn(styles.timeCell, { [styles.header]: isHeader })}>
      {children}
    </div>
  )
}
