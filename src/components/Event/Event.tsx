import styles from './Event.module.css'
import cn from 'classnames'
import {
  EVENT_FAMILY,
  EVENT_PERSONAL,
  EVENT_WORK,
  SMALL,
} from '@/constants/constants.ts'
import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { useEvent } from '@/components/Event/useEvent.ts'
import { Avatar } from '@/components/Avatar/Avatar.tsx'

export type TypeEvent = 'work' | 'personal' | 'family'

export interface EventProps {
  event: IEventResponse
  type: TypeEvent
}

export const Event = ({ event, type }: EventProps) => {
  const {
    title,
    createdBy,
    creator,
    duration,
    position,
    size,
    additionalParticipantsCount,
  } = useEvent(event)

  return (
    <div
      className={styles.wrapper}
      style={{
        top: `${position}px`,
        minHeight: `${size}px`,
      }}
    >
      <div
        className={cn(
          styles.event,
          { [styles.work]: type === EVENT_WORK },
          { [styles.personal]: type === EVENT_PERSONAL },
          { [styles.family]: type === EVENT_FAMILY },
        )}
      >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.duration}>{duration}</span>
        <div className={styles.participants}>
          <Avatar size={SMALL} avatarUrl={createdBy.avatarUrl} />
          <div className={styles.ava}></div>
          <span className={styles.creator}>{creator}</span>
          {!!additionalParticipantsCount && (
            <span> + {additionalParticipantsCount}</span>
          )}
        </div>
      </div>
    </div>
  )
}
