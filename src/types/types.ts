import { useCustomMonth } from '@/hooks/useCustomMonth.ts'
import { createDate } from '@/functions/createDate.ts'

export type ToggleDirection = 'next' | 'prev'

export type CustomDate = ReturnType<typeof createDate>

export type CustomMonth = ReturnType<typeof useCustomMonth>
