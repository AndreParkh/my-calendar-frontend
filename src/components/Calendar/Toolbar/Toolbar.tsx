import styles from './Toolbar.module.css'
import cn from 'classnames'
import arrowUrl from '/arrow.svg?url'
import { Button } from '@/components/Button/Button'
import { NEXT, PREV } from '@/constants/constants.ts'
import { useToolbar } from '@/components/Calendar/Toolbar/useToolbar.ts'
import { useTranslation } from 'react-i18next'

export const Toolbar = () => {
  const { monthAndYear, changeWeek, setToday } = useToolbar()
  const { t } = useTranslation('toolbar')

  return (
    <div className={styles.toolbar}>
      <Button color="gray" size="medium" onClick={setToday}>
        {t('button.today')}
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
