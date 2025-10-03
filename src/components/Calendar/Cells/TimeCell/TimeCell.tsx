import styles from './TimeCell.module.css'
import { ReactNode } from 'react'

export interface TimeCellProps {
  children?: ReactNode
}

export const TimeCell = ({ children }: TimeCellProps) => {
  return <div className={styles.timeCell}>{children}</div>
}
