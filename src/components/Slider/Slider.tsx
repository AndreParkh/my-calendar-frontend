import styles from './Slider.module.css'
import cn from 'classnames'

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <img className={styles.fakeImage} alt={'img'}></img>
      <div className={styles.dots}>
        <div className={cn(styles.dot, styles.dotActive)}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}
