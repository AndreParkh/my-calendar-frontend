import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { useCallback, useMemo } from 'react'
import { ToggleDirection } from '@/types/types.ts'
import { NEXT, QTY_WEEK_DAYS } from '@/constants/constants.ts'
import { setDate } from '@/store/reducers/calendarSlice.ts'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const useToolbar = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const dispatch = useAppDispatch()
  const { createDate } = useCustomDate()

  const date = useMemo(
    () => createDate(new Date(selectedDate)),
    [selectedDate, createDate],
  )
  const monthAndYear = useMemo(
    () =>
      `${date.monthName[0].toUpperCase()}${date.monthName.slice(1)} ${date.year}`,
    [date],
  )

  const changeWeek = useCallback(
    (direction: ToggleDirection) => {
      const day =
        direction === NEXT
          ? date.dayNumber + QTY_WEEK_DAYS
          : date.dayNumber - QTY_WEEK_DAYS

      dispatch(setDate(new Date(date.year, date.monthIndex, day).toISOString()))
    },
    [dispatch, date],
  )

  const setToday = useCallback(() => {
    dispatch(setDate(new Date().toISOString()))
  }, [dispatch])

  const resultMemo = useMemo(
    () => ({
      monthAndYear,
      setToday,
      changeWeek,
    }),
    [monthAndYear, setToday, changeWeek],
  )

  return resultMemo
}
