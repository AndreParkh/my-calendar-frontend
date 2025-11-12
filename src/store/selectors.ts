import { RootStore } from '@/store/store.ts'

const selectAuthState = (state: RootStore) => state.authReducer

export const selectAuthToken = (state: RootStore) =>
  selectAuthState(state).token
export const selectAuthError = (state: RootStore) =>
  selectAuthState(state).error
export const selectAuthLoading = (state: RootStore) =>
  selectAuthState(state).loading

const selectSliderState = (state: RootStore) => state.sliderReducer

export const selectSliderNumber = (state: RootStore) =>
  selectSliderState(state).sliderNumber
export const selectSlideCount = (state: RootStore) =>
  selectSliderState(state).slidesCount

const selectCalendarState = (state: RootStore) => state.calendarReducer

export const selectSelectedDate = (state: RootStore) =>
  selectCalendarState(state).selectedDate
