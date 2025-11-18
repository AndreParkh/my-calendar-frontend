import cn from 'classnames'
import styles from '@/components/Event/Event.module.css'
import { LARGE, MEDIUM, SMALL } from '@/constants/constants.ts'

export type SizeType = 'small' | 'medium' | 'large'

interface AvatarProps {
  size: SizeType
  avatarUrl: string
}

export const Avatar = ({ size, avatarUrl }: AvatarProps) => {
  return (
    <div
      className={cn(
        styles.avatar,
        { [styles.small]: size === SMALL },
        { [styles.medium]: size === MEDIUM },
        { [styles.large]: size === LARGE },
      )}
    >
      <img width={'20px'} src={avatarUrl} alt={'avatar'} />
    </div>
  )
}
