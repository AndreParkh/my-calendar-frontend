import styles from './DayColumn.module.css'
import {
  EVENT_WORK,
  QTY_BLOCKS_IN_HOUR,
  QTY_HOURS,
} from '@/constants/constants.ts'
import { memo, useMemo } from 'react'
import { v4 as v4uuid } from 'uuid'
import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { Event } from '@/components/Event/Event.tsx'

interface DayColumnProps {
  events?: IEventResponse[]
}

const DayColumn = ({ events }: DayColumnProps) => {
  const timeList = useMemo(
    () => new Array(QTY_HOURS * QTY_BLOCKS_IN_HOUR).fill(''),
    [],
  )

  return (
    <div className={styles.dayColumn}>
      {timeList.map(() => (
        <div className={styles.cell} key={v4uuid()} />
      ))}
      {events &&
        events.map((event) => (
          <Event key={v4uuid()} event={event} type={EVENT_WORK} />
        ))}
    </div>
  )
}

export const DayColumnMemo = memo(DayColumn)
