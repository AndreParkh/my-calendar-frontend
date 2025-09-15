import styles from './Logout.module.css'
import { useAppDispatch } from '@/store/hooks.ts'
import { clearToken } from '@/store/reducers/authSlice.ts'
import { Button } from '@/components'
import Cookies from 'js-cookie'
import { AUTH_TOKEN } from '@/constants/constants.ts'

export const Logout = () => {
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(clearToken())
    Cookies.remove(AUTH_TOKEN)
  }

  return (
    <Button className={styles.logout} onClick={logout}>
      Выход
    </Button>
  )
}
