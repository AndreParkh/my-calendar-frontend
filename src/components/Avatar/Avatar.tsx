import cn from 'classnames'
import styles from '@/components/Avatar/Avatar.module.css'
import { LARGE, MEDIUM, SMALL } from '@/constants/constants.ts'

export type SizeType = 'small' | 'medium' | 'large'

interface AvatarProps {
  size: SizeType
  avatarUrl: string
}

export const Avatar = ({ size, avatarUrl }: AvatarProps) => {
  return (
    <img
      className={cn(
        styles.avatar,
        { [styles.small]: size === SMALL },
        { [styles.medium]: size === MEDIUM },
        { [styles.large]: size === LARGE },
      )}
      src={avatarUrl}
      alt="avatar"
    />
  )
}
