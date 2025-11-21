import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEventState } from '@/store/types.ts'
import { fetchEventsThunk } from '@/store/thunks/fetchEventsThunk.ts'
import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'

const initialState: IEventState = {
  events: [],
  loading: false,
  error: '',
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<typeof initialState.events>) => {
      state.events = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(
        fetchEventsThunk.fulfilled,
        (state, action: PayloadAction<IEventResponse[]>) => {
          state.events = action.payload
          state.loading = false
          state.error = ''
        },
      )
      .addCase(
        fetchEventsThunk.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false
          state.error = action.payload || 'Ошибка при загрузки событий'
        },
      )
  },
})

export const { setEvents } = eventSlice.actions
export default eventSlice.reducer
