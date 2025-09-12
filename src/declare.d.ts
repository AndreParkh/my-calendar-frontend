import { RootStore } from '@/store/store.ts'

declare global {
  interface Window {
    __INITIAL_STATE__?: RootStore
  }
}

export {}
