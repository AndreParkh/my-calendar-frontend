import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { getOnlyDate } from '@/functions/getOnlyDate.ts'

export const useGroupEvents = (events: IEventResponse[]) => {
  const eventsByDate = new Map()
  events.map((event) => {
    const key = getOnlyDate(event.startTime)
    if (!eventsByDate.get(key)) {
      eventsByDate.set(key, [event])
    } else {
      const eventList = eventsByDate.get(key)
      eventList.push(event)
      eventsByDate.set(key, eventList)
    }
  })

  return eventsByDate
}
