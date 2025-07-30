import { RootStore } from '@/store/store.ts'

const selectAuthState = (state: RootStore) => state.authReducer

export const selectAuthError = (state: RootStore) =>
  selectAuthState(state).error
export const selectAuthLoading = (state: RootStore) =>
  selectAuthState(state).loading
