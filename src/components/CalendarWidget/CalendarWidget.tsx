import styles from './CalendarWidget.module.css'
import { useState } from 'react'
import { createDate, CustomDate } from '@/functions/createDate.ts'
import cn from 'classnames'
import { getShownDayList } from '@/functions/getShownDayList.ts'
import { createMonth } from '@/functions/createMonth.ts'
import { DayItemMemo } from '@/components/CalendarWidget/DayItem/DayItem.tsx'
import { Button } from '@/components'
import arrowUrl from '/arrow.svg?url'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { setDate } from '@/store/reducers/calendarSlice.ts'
import { NextPrev } from '@/types/types.ts'
import { NEXT, PREV } from '@/constants/constants.ts'

const LAST_MONTH_INDEX = 11
const FIRST_MONTH_INDEX = 0

export const CalendarWidget = () => {
  const dispatch = useAppDispatch()
  const selectedDateISO = useAppSelector(selectSelectedDate)
  const selectedDate = createDate(new Date(selectedDateISO))

  const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  const [shownDate, setShownDate] = useState(selectedDate)
  const [shownMonth, setShownMonth] = useState(
    createMonth(new Date(shownDate.year, shownDate.monthIndex)),
  )
  const [shownYear, setShownYear] = useState(shownDate.year)

  const shownDayList = getShownDayList(shownMonth, shownYear)

  const changeMonth = (direction: NextPrev) => {
    const monthIndex =
      direction === NEXT ? shownMonth.monthIndex + 1 : shownMonth.monthIndex - 1

    if (monthIndex === -1) {
      setShownYear(shownYear - 1)
      return setShownMonth(
        createMonth(new Date(shownYear - 1, LAST_MONTH_INDEX)),
      )
    }

    if (monthIndex === LAST_MONTH_INDEX + 1) {
      setShownYear(shownYear + 1)
      return setShownMonth(
        createMonth(new Date(shownYear + 1, FIRST_MONTH_INDEX)),
      )
    }
    return setShownMonth(createMonth(new Date(shownYear, monthIndex)))
  }

  const clickHandler = (dayItem: CustomDate) => {
    const isOtherMonthDay = dayItem.monthIndex !== shownMonth.monthIndex

    if (isOtherMonthDay) {
      setShownMonth(createMonth(dayItem.date))
      setShownDate(dayItem)
    }
    dispatch(setDate(dayItem.date.toISOString()))
  }

  return (
    <div className={styles.calendarWidget}>
      <div className={styles.body}>
        <div className={styles.toolbarWidget}>
          <span className={styles.date}>
            {shownMonth.monthName[0].toUpperCase() +
              shownMonth.monthName.slice(1)}
          </span>
          <Button
            color="transparent"
            size="small"
            onClick={() => changeMonth(PREV)}
          >
            <img
              className={cn(styles.arrow, styles.arrowLeft)}
              src={arrowUrl}
              alt="prevMonth"
            />
          </Button>
          <Button
            color="transparent"
            size="small"
            onClick={() => changeMonth(NEXT)}
          >
            <img className={styles.arrow} src={arrowUrl} alt="nextMonth" />
          </Button>
        </div>
        <div className={styles.weekNames}>
          {weekDayNames.map((weekDayName, idx) => (
            <p key={idx} className={styles.weekDayName}>
              {weekDayName}
            </p>
          ))}
        </div>
        <div className={styles.days}>
          {shownDayList.map((dayItem, idx) => (
            <DayItemMemo
              key={idx}
              dayObj={dayItem}
              isOtherMonth={dayItem.monthIndex !== shownMonth.monthIndex}
              onClick={() => clickHandler(dayItem)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
