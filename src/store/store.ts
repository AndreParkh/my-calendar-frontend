import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/reducers/authSlice.ts'
import sliderReducer from '@/store/reducers/sliderSlice.ts'

const rootReducer = combineReducers({
  authReducer,
  sliderReducer,
})

export type RootStore = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: RootStore) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
