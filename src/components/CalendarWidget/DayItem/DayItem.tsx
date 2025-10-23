import styles from './DayItem.module.css'
import cn from 'classnames'
import { createDate, CustomDate } from '@/functions/createDate.ts'
import { ButtonHTMLAttributes, DetailedHTMLProps, memo, useMemo } from 'react'

interface DayItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  dayObj: CustomDate
  isOtherMonth?: boolean
}

const DayItem = ({
  dayObj,
  isOtherMonth = false,
  onClick,
  ...props
}: DayItemProps) => {
  const today = useMemo(() => createDate(), [])
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

export const DayItemMemo = memo(DayItem)
