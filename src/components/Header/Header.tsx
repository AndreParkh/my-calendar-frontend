import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'
import { useNavigate } from 'react-router'
import { routesPaths } from '@/routes.tsx'
import { Button } from '@/components'
import { clearToken } from '@/store/reducers/authSlice.ts'
import Cookies from 'js-cookie'
import { AUTH_TOKEN } from '@/constants/constants.ts'

export const Header = () => {
  const { t } = useTranslation('header')
  const token = useAppSelector(selectAuthToken)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authHandle = () => {
    if (token) {
      dispatch(clearToken())
      Cookies.remove(AUTH_TOKEN)
    } else {
      navigate(routesPaths.auth.login)
    }
  }

  return (
    <header className={styles.header}>
      <img className={styles.icon} src={'/Logo.png'} alt={'alt'}></img>
      <h1 className={styles.name}>{t('top.title')}</h1>
      <Button
        className={styles.authButton}
        color={'blue'}
        size={'medium'}
        onClick={authHandle}
      >
        {token ? t('top.button.logout') : t('top.button.login')}
      </Button>
    </header>
  )
}
