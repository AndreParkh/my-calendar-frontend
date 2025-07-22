import { configureStore } from '@reduxjs/toolkit'


const makeStore = (preloadedState: any) => {
  return configureStore({
    reducer: {},
    preloadedState
  })
}

type AppStore = ReturnType<typeof makeStore>
type RootStore = ReturnType<AppStore['getState']>
type AppDispatch = AppStore['dispatch']

export { makeStore }
export type { AppStore, RootStore, AppDispatch }