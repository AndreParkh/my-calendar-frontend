import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CalendarState } from '@/store/types.ts'

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
  shownWeek: [],
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
    setShownWeek: (state, action: PayloadAction<string[]>) => {
      state.shownWeek = action.payload
    },
  },
})

export const { setDate, setShownWeek } = calendarSlice.actions
export default calendarSlice.reducer
