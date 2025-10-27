import styles from './DayItem.module.css'
import cn from 'classnames'
import { createDate, CustomDate } from '@/functions/createDate.ts'
import { ButtonHTMLAttributes, DetailedHTMLProps, memo, useMemo } from 'react'

interface DayItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customDate: CustomDate
  isOtherMonth?: boolean
}

const DayItem = ({
  customDate,
  isOtherMonth = false,
  onClick,
  ...props
}: DayItemProps) => {
  const today = useMemo(() => createDate(), [])
  const isToday = useMemo(
    () =>
      customDate.year === today.year &&
      customDate.monthIndex === today.monthIndex &&
      customDate.dayNumber === today.dayNumber,
    [today, customDate],
  )

  return (
    <button
      className={cn(styles.day, {
        [styles.otherMonth]: isOtherMonth,
        [styles.today]: isToday,
      })}
      onClick={onClick}
      {...props}
    >
      {customDate.dayNumber}
    </button>
  )
}

export const DayItemMemo = memo(DayItem)
