import { NextPrev } from '@/types/types.ts'

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
export const NEXT: NextPrev = 'next'
export const PREV: NextPrev = 'prev'
