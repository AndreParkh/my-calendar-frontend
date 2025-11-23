import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { useMemo } from 'react'
import { usePositionByTime } from '@/hooks/usePositionByTime.ts'
import { coefficient } from '@/constants/constants.ts'
import { useAppSelector } from '@/store/hooks.ts'
import { selectAuthorizedUser } from '@/store/selectors.ts'
import { useTranslation } from 'react-i18next'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

const MAIN_PARTICIPANTS_COUNT = 2

export const useEvent = (event: IEventResponse) => {
  const { t } = useTranslation('event')

  const authorizedUser = useAppSelector(selectAuthorizedUser)
  const { formatTime } = useCustomDate()

  const { title, createdBy, startTime, endTime, participants } = event
  const startDate = useMemo(() => new Date(startTime), [startTime])
  const endDate = useMemo(() => new Date(endTime), [endTime])
  const additionalParticipantsCount = useMemo(
    () => Math.max(participants.length - MAIN_PARTICIPANTS_COUNT, 0),
    [participants],
  )

  const { minutesSinceMidnight: timeStart, position } =
    usePositionByTime(startDate)
  const { minutesSinceMidnight: timeEnd } = usePositionByTime(endDate)

  const formatedEventTime = useMemo(
    () => ({
      start: formatTime(startDate, 'HH:mm'),
      end: formatTime(endDate, 'HH:mm'),
    }),
    [formatTime, startDate, endDate],
  )

  const duration = useMemo(
    () => t('time', { eventTime: formatedEventTime }),
    [formatedEventTime, t],
  )
  const size = useMemo(
    () => (timeEnd - timeStart) * coefficient,
    [timeEnd, timeStart],
  )

  const creator = useMemo(
    () =>
      authorizedUser?.id === createdBy.id
        ? t('creator.self')
        : t('creator.user', { createdBy }),
    [authorizedUser, createdBy, t],
  )

  return {
    title,
    createdBy,
    creator,
    duration,
    position,
    size,
    additionalParticipantsCount,
  }
}
