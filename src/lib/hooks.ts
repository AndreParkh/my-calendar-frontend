import { useDispatch, useSelector, useStore } from 'react-redux'
import { AppDispatch, AppStore, RootStore } from '@/lib/store.ts'


const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootStore>()
const useAppStore = useStore.withTypes<AppStore>()

export {
  useAppStore,
  useAppSelector,
  useAppDispatch
}