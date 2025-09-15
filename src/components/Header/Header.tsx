import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'
import { Logout } from '@/components/Loguot/Logout.tsx'
import { useEffect } from 'react'
import { useAppSelector } from '@/store/hooks.ts'
import { selectAuthToken } from '@/store/selectors.ts'

export const Header = () => {
  const { t } = useTranslation('header')
  const token = useAppSelector(selectAuthToken)

  useEffect(() => {
    console.log('header.token: ', token)
  }, [token])

  return (
    <header className={styles.header}>
      <img className={styles.icon} src={'/Logo.png'} alt={'alt'}></img>
      <h1 className={styles.name}>{t('top.title')}</h1>
      <Logout />
    </header>
  )
}
