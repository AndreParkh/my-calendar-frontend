import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CalendarState } from '@/store/types.ts'

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDate: (
      state,
      action: PayloadAction<typeof initialState.selectedDate>,
    ) => {
      state.selectedDate = action.payload
    },
  },
})

export const { setDate } = calendarSlice.actions
export default calendarSlice.reducer
