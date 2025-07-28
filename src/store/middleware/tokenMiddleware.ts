import { Dispatch, Middleware, MiddlewareAPI, UnknownAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/store.ts'
import { AUTH_TOKEN } from '@/constants/constants.ts'


export const tokenMiddleware: Middleware<{}, RootState> =
  (storeAPI) => (next) => action => {
  const prevToken = getTokenFromState(storeAPI)
  const result = next(action)
  const currToken = getTokenFromState(storeAPI)

  if (prevToken !== currToken && process.env.SSR) {
    currToken
      ? sessionStorage.setItem(AUTH_TOKEN, currToken)
      : sessionStorage.removeItem(AUTH_TOKEN)
  }

  return result
}

const getTokenFromState = (store: MiddlewareAPI<Dispatch<UnknownAction>>) => {
  return store.getState().authReducer.token
}