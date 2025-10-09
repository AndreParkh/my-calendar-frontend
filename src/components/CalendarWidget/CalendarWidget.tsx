import styles from './CalendarWidget.module.css'
import { useState } from 'react'
import { createDate, DateObj } from '@/functions/createDate.ts'
import cn from 'classnames'
import { getShownDayList } from '@/functions/getShownDayList.ts'
import { createMonth } from '@/functions/createMonth.ts'
import { DayItem } from '@/components/CalendarWidget/DayItem/DayItem.tsx'
import { Button } from '@/components'
import arrowUrl from '/arrow.svg?url'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { setDate } from '@/store/reducers/calendarSlice.ts'

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

  const changeMonth = (direction: 'next' | 'prev') => {
    const monthIndex =
      direction === 'next'
        ? shownMonth.monthIndex + 1
        : shownMonth.monthIndex - 1

    if (monthIndex === -1) {
      setShownYear(shownYear - 1)
      return setShownMonth(createMonth(new Date(shownYear - 1, 11)))
    }

    if (monthIndex === 12) {
      setShownYear(shownYear + 1)
      return setShownMonth(createMonth(new Date(shownYear + 1, 0)))
    }
    return setShownMonth(createMonth(new Date(shownYear, monthIndex)))
  }

  const clickHandler = (dayItem: DateObj) => {
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
            color={'transparent'}
            size={'small'}
            onClick={() => changeMonth('prev')}
          >
            <img
              className={cn(styles.arrow, styles.arrowLeft)}
              src={arrowUrl}
              alt={'prevMonth'}
            />
          </Button>
          <Button
            color={'transparent'}
            size={'small'}
            onClick={() => changeMonth('next')}
          >
            <img className={styles.arrow} src={arrowUrl} alt={'nextMonth'} />
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
            <DayItem
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
