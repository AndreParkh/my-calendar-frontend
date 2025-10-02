import styles from './Event.module.css'
import cn from 'classnames'

type TypeEvent = 'work' | 'personal' | 'family'

export interface EventProps {
  type: TypeEvent
  title: string
  description: string
}

export const Event = ({ type, title, description }: EventProps) => {
  return (
    <div
      className={cn(
        styles.event,
        { [styles.work]: type === 'work' },
        { [styles.personal]: type === 'personal' },
        { [styles.family]: type === 'family' },
      )}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.moreInfo}>
        <a className={styles.moreInfoLink}>Подробнее →</a>
      </p>
    </div>
  )
}
