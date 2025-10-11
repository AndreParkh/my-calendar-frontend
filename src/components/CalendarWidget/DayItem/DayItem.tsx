import styles from './DayItem.module.css'
import cn from 'classnames'
import { createDate, DateObj } from '@/functions/createDate.ts'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface DayItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  dayObj: DateObj
  isOtherMonth?: boolean
}

export const DayItem = ({
  dayObj,
  isOtherMonth = false,
  onClick,
  ...props
}: DayItemProps) => {
  const today = createDate()
  const isToday =
    dayObj.year === today.year &&
    dayObj.monthIndex === today.monthIndex &&
    dayObj.dayNumber === today.dayNumber

  return (
    <button
      className={cn(styles.day, {
        [styles.otherMonth]: isOtherMonth,
        [styles.today]: isToday,
      })}
      onClick={onClick}
      {...props}
    >
      {dayObj.dayNumber}
    </button>
  )
}
