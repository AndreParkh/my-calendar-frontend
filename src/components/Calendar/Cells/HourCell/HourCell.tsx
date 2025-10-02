import styles from './HourCell.module.css'

export const HourCell = () => {
  return (
    <>
      <div className={styles.firstHalf} />
      <div className={styles.secondHalf} />
      <div className={styles.firstHalf} />
      <div className={styles.secondHalf} />
    </>
  )
}
