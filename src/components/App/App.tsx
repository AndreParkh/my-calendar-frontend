import styles from './App.module.css'
import { Outlet } from 'react-router'
import { Footer, Header } from '@/components'

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
