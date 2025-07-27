import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation('header')

  return (
    <header className={styles.header}>
      <div className={styles.icon}></div>
      <h1 className={styles.name}>{t('top.title')}</h1>
    </header>
  )
}
