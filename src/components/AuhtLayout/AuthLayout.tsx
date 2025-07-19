import { Outlet } from 'react-router'
import styles from './AuthLayout.module.css'
import cn from 'classnames'

export default function AuthLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.icon}></div>
        <h1 className={styles.name}>Семейный календарь</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.slider}>
          <div className={styles.fakeImage}></div>
          <div className={styles.dots}>
            <div className={cn(styles.dot, styles.dot__active)}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
        <div className={styles.divider} />
        <Outlet />
      </div>
      <footer className={styles.footer}></footer>
    </div>
  )
}
