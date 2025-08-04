import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation('header')

  return (
    <header className={styles.header}>
      <img className={styles.icon} alt={'alt'}></img>
      <h1 className={styles.name}>{t('top.title')}</h1>
    </header>
  )
}
