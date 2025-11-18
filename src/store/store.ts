import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/reducers/authSlice.ts'
import sliderReducer from '@/store/reducers/sliderSlice.ts'
import calendarReducer from '@/store/reducers/calendarSlice.ts'
import eventReducer from '@/store/reducers/eventSlice.ts'

const rootReducer = combineReducers({
  authReducer,
  sliderReducer,
  calendarReducer,
  eventReducer,
})

export type RootStore = ReturnType<typeof rootReducer>

export const createStore = (preloadedState?: RootStore) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
