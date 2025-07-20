import styles from './ErrorSpan.module.css'

const ErrorSpan = ({ message }: { message?: string }) => {
  return (
    <div className={styles.wrapper}>
      {message && <span className={styles.message}>{message}</span>}
    </div>
  )
}

export { ErrorSpan }