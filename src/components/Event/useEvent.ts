import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { useMemo } from 'react'
import { usePositionByTime } from '@/hooks/usePositionByTime.ts'
import { useFormatTime } from '@/hooks/useFormatTime.ts'
import { coefficient } from '@/constants/constants.ts'
//import { useTranslation } from 'react-i18next'

const MAIN_PARTICIPANTS_COUNT = 2

export const useEvent = (event: IEventResponse) => {
  //const { t } = useTranslation('event')

  const { title, createdBy, startTime, endTime, participants } = event
  const startDate = useMemo(() => new Date(startTime), [startTime])
  const endDate = useMemo(() => new Date(endTime), [endTime])
  const additionalParticipantsCount = useMemo(
    () => Math.max(participants.length - MAIN_PARTICIPANTS_COUNT + 2, 0),
    [participants],
  )

  const { minutesSinceMidnight: timeStart, position } =
    usePositionByTime(startDate)
  const { minutesSinceMidnight: timeEnd } = usePositionByTime(endDate)
  const { formatTime: formatStartTime } = useFormatTime(startDate)
  const { formatTime: formatEndTime } = useFormatTime(endDate)
  const duration = useMemo(
    () => `${formatStartTime('HH:mm')} - ${formatEndTime('HH:mm')}`,
    [formatStartTime, formatEndTime],
  )
  const size = useMemo(
    () => (timeEnd - timeStart) * coefficient,
    [timeEnd, timeStart],
  )

  return {
    title,
    createdBy,
    duration,
    position,
    size,
    additionalParticipantsCount,
  }
}
