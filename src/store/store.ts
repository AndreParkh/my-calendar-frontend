import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/reducers/authSlice.ts'
import { tokenMiddleware } from '@/store/middleware/tokenMiddleware.ts'

const rootReducer = combineReducers({
  authReducer,
})

export type RootStore = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: RootStore) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tokenMiddleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
