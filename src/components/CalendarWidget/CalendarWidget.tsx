import styles from './CalendarWidget.module.css'
import cn from 'classnames'
import { DayItemMemo } from '@/components/CalendarWidget/DayItem/DayItem.tsx'
import { Button } from '@/components'
import arrowUrl from '/arrow.svg?url'
import { NEXT, PREV } from '@/constants/constants.ts'
import { useCalendarWidget } from '@/components/CalendarWidget/useCalendarWidget.ts'
import { useTranslation } from 'react-i18next'
import { v4 as v4uuid } from 'uuid'

const SEPARATOR = '|'

export const CalendarWidget = () => {
  const {
    convertedSelectedDate,
    changeSelectedDate,
    shownDayList,
    changeMonth,
  } = useCalendarWidget()
  const { t } = useTranslation('dashboard')
  const { monthName, monthIndex } = convertedSelectedDate
  const weekDayNames = t('weekday.names', { joinArrays: SEPARATOR }).split(
    SEPARATOR,
  )

  return (
    <div className={styles.calendarWidget}>
      <div className={styles.body}>
        <div className={styles.toolbarWidget}>
          <span className={styles.date}>
            {monthName[0].toUpperCase() + monthName.slice(1)}
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
          {weekDayNames.map((weekDayName) => (
            <span key={v4uuid()} className={styles.weekDayName}>
              {weekDayName}
            </span>
          ))}
        </div>
        <div className={styles.days}>
          {shownDayList.map((dayItem, idx) => (
            <DayItemMemo
              key={idx}
              customDate={dayItem}
              isOtherMonth={dayItem.monthIndex !== monthIndex}
              onClick={() => changeSelectedDate(dayItem)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
