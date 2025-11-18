import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '@/api/API.ts'
import { IEventByDataBetween } from '@/store/types.ts'
import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'

export const fetchEventsThunk = createAsyncThunk<
  IEventResponse[],
  IEventByDataBetween,
  { rejectValue: string }
>('event/fetch', async (dates) => {
  try {
    const response = await API.event.getByDateBetween(dates)
    return response.data
  } catch {
    return null
  }
})
