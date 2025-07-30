import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  UnknownAction,
} from '@reduxjs/toolkit'
import { RootStore } from '@/store/store.ts'
import { AUTH_TOKEN } from '@/constants/constants.ts'

export const tokenMiddleware: Middleware<{}, RootStore> =
  (storeAPI) => (next) => (action) => {
    const prevToken = getTokenFromState(storeAPI)
    const result = next(action)
    const currToken = getTokenFromState(storeAPI)
    if (prevToken !== currToken && !import.meta.env.SSR) {
      if (currToken) {
        sessionStorage.setItem(AUTH_TOKEN, currToken)
        document.cookie = `${AUTH_TOKEN}=${currToken}; max-age=86400;`
        // console.log('tokenMiddleware. currToken: ', currToken)
      } else {
        sessionStorage.removeItem(AUTH_TOKEN)
      }
    }

    return result
  }

const getTokenFromState = (store: MiddlewareAPI<Dispatch<UnknownAction>>) => {
  return store.getState().authReducer.token
}
