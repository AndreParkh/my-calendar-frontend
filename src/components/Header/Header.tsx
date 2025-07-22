import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation('header')

  return (
    <header className={styles.header}>
      <div className={styles.icon}></div>
      <h1 className={styles.name}>{t('name')}</h1>
    </header>
  )
}

export { Header }
