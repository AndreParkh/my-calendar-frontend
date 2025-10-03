import styles from './Toolbar.module.css'
import cn from 'classnames'
import { createDate } from '@/functuions/createDate.ts'
import arrowUrl from '/arrow.svg?url'

interface ToolbarProps {
  date: Date
}

export const Toolbar = ({ date }: ToolbarProps) => {
  const myDate = createDate(date)

  return (
    <div className={styles.toolbar}>
      <button className={styles.todayButton}>Сегодня</button>
      <button className={styles.arrowButton}>
        {/*<div className={cn(styles.arrow, styles.arrowRight)} ></div>*/}
        <img
          className={cn(styles.arrow, styles.arrowLeft)}
          src={arrowUrl}
          alt={'prevMonth'}
        />
      </button>
      <button className={styles.arrowButton}>
        <img className={styles.arrow} src={arrowUrl} alt={'nextMonth'} />
        {/*<div className={cn(styles.arrow, styles.arrowLeft)}></div>*/}
      </button>
      <span className={styles.date}>
        {myDate.monthName[0].toUpperCase() + myDate.monthName.slice(1)}{' '}
        {myDate.year}
      </span>
    </div>
  )
}
