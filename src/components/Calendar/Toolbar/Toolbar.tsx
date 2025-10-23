import styles from './Toolbar.module.css'
import cn from 'classnames'
import { createDate } from '@/functions/createDate.ts'
import arrowUrl from '/arrow.svg?url'
import { Button } from '@/components/Button/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { setDate } from '@/store/reducers/calendarSlice.ts'
import { NEXT, PREV, QTY_WEEK_DAYS } from '@/constants/constants.ts'
import { useMemo } from 'react'
import { NextPrev } from '@/types/types.ts'

export const Toolbar = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const dispatch = useAppDispatch()

  const date = useMemo(() => createDate(new Date(selectedDate)), [selectedDate])
  const monthAndYear = `${date.monthName[0].toUpperCase()}${date.monthName.slice(1)} ${date.year}`

  const changeWeek = (direction: NextPrev) => {
    const day =
      direction === NEXT
        ? date.dayNumber + QTY_WEEK_DAYS
        : date.dayNumber - QTY_WEEK_DAYS

    dispatch(setDate(new Date(date.year, date.monthIndex, day).toISOString()))
  }

  const setToday = () => {
    dispatch(setDate(new Date().toISOString()))
  }

  return (
    <div className={styles.toolbar}>
      <Button color="gray" size="medium" onClick={setToday}>
        Сегодня
      </Button>
      <Button color="transparent" size="small" onClick={() => changeWeek(PREV)}>
        <img
          className={cn(styles.arrow, styles.arrowLeft)}
          src={arrowUrl}
          alt="prevMonth"
        />
      </Button>
      <Button color="transparent" size="small" onClick={() => changeWeek(NEXT)}>
        <img className={styles.arrow} src={arrowUrl} alt="nextMonth" />
      </Button>
      <span className={styles.date}>{monthAndYear}</span>
    </div>
  )
}
