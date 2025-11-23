import { ToggleDirection } from '@/types/types.ts'
import { TypeEvent } from '@/components/Event/Event.tsx'
import { SizeType } from '@/components/Avatar/Avatar.tsx'

export const AUTH_TOKEN = 'authToken'
export const TYPE_TOKEN = 'Bearer'
export const MIN_PASSWORD_LENGTH = 6
export const EMAIL_PATTERN = RegExp(
  '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
)
export const LOCAL = 'default'
export const QTY_HOURS = 24
export const QTY_WEEK_DAYS = 7
export const QTY_BLOCKS_IN_HOUR = 4
export const NEXT: ToggleDirection = 'next'
export const PREV: ToggleDirection = 'prev'
export const LAST_MONTH_INDEX = 11
export const FIRST_MONTH_INDEX = 0
export const EVENT_WORK: TypeEvent = 'work'
export const EVENT_FAMILY: TypeEvent = 'family'
export const EVENT_PERSONAL: TypeEvent = 'personal'
export const QTY_PX_IN_BLOCK = 24
export const QTY_PX_IN_HOUR = QTY_PX_IN_BLOCK * QTY_BLOCKS_IN_HOUR
export const QTY_MIN_IN_HOURS = 60
export const coefficient = QTY_PX_IN_HOUR / QTY_MIN_IN_HOURS

export const SMALL: SizeType = 'small'
export const MEDIUM: SizeType = 'medium'
export const LARGE: SizeType = 'large'
