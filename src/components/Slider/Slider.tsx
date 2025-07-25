import styles from './Slider.module.css'
import cn from 'classnames'

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.fakeImage}></div>
      <div className={styles.dots}>
        <div className={cn(styles.dot, styles.dot__active)}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}
