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
export const selectShownWeek = (state: RootStore) =>
  selectCalendarState(state).shownWeek

const selectEventState = (state: RootStore) => state.eventReducer

export const selectEvents = (state: RootStore) => selectEventState(state).events
export const selectEventError = (state: RootStore) =>
  selectEventState(state).error
export const selectEventLoading = (state: RootStore) =>
  selectEventState(state).loading

const selectUserState = (state: RootStore) => state.userReducer
export const selectAuthorizedUser = (state: RootStore) =>
  selectUserState(state).authorizedUser
export const selectAuthorizedUserError = (state: RootStore) =>
  selectUserState(state).error
export const selectAuthorizedUserLoading = (state: RootStore) =>
  selectUserState(state).loading
