import { Outlet } from 'react-router'
import styles from './App.module.css'
import { Footer, Header } from '@/components'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export { App }
