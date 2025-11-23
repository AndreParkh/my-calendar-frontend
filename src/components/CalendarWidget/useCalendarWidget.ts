import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSelectedDate } from '@/store/selectors.ts'
import { useCallback, useMemo, useState } from 'react'
import { useWidgetMonth } from '@/hooks/useWidgetMonth.ts'
import {
  FIRST_MONTH_INDEX,
  LAST_MONTH_INDEX,
  NEXT,
} from '@/constants/constants.ts'
import { ToggleDirection } from '@/types/types.ts'
import { setDate } from '@/store/reducers/calendarSlice.ts'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

export const useCalendarWidget = () => {
  const dispatch = useAppDispatch()
  const selectedDateISO = useAppSelector(selectSelectedDate)
  const [shownDate, setShownDate] = useState(new Date(selectedDateISO))
  const shownDayList = useWidgetMonth(shownDate)
  const { createDate } = useCustomDate()
  type CustomDate = ReturnType<typeof createDate>

  const convertedSelectedDate = useMemo(
    () => createDate(shownDate),
    [shownDate, createDate],
  )
  const { monthIndex, year } = convertedSelectedDate

  const changeMonth = useCallback(
    (direction: ToggleDirection) => {
      const nextMonthIndex =
        direction === NEXT ? monthIndex + 1 : monthIndex - 1

      if (nextMonthIndex === -1) {
        return setShownDate(new Date(year - 1, LAST_MONTH_INDEX))
      }

      if (nextMonthIndex === LAST_MONTH_INDEX + 1) {
        return setShownDate(new Date(year + 1, FIRST_MONTH_INDEX))
      }
      return setShownDate(new Date(year, nextMonthIndex))
    },
    [monthIndex, year],
  )

  const changeSelectedDate = useCallback(
    (dayItem: CustomDate) => {
      const isOtherMonthDay = dayItem.monthIndex !== monthIndex

      if (isOtherMonthDay) {
        setShownDate(dayItem.date)
      }
      dispatch(setDate(dayItem.date.toISOString()))
    },
    [monthIndex, dispatch],
  )

  const resultMemo = useMemo(
    () => ({
      convertedSelectedDate,
      shownDayList,
      changeMonth,
      changeSelectedDate,
    }),
    [convertedSelectedDate, shownDayList, changeMonth, changeSelectedDate],
  )

  return resultMemo
}
