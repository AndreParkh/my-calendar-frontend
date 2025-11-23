import styles from './DayItem.module.css'
import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, memo, useMemo } from 'react'
import { CustomDate, useCustomDate } from '@/hooks/useCustomDate.ts'

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
  const { checkIsToday } = useCustomDate()
  const isToday = useMemo(
    () => checkIsToday(customDate),
    [customDate, checkIsToday],
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
