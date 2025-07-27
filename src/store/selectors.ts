import { RootState } from '@/store/store.ts'

const selectAuthState = (state: RootState) => state.authReducer

export const selectAuthToken = (state: RootState) =>
  selectAuthState(state).token
export const selectAuthError = (state: RootState) =>
  selectAuthState(state).error
export const selectAuthLoading = (state: RootState) =>
  selectAuthState(state).loading
