import styles from './ErrorSpan.module.css'
import { useAppDispatch } from '@/store/hooks.ts'
import { UnknownAction } from '@reduxjs/toolkit'

interface ErrorSpanProps {
  message: string
  clearError: () => UnknownAction
}

export const ErrorSpan = ({ message, clearError }: ErrorSpanProps) => {
  const dispatch = useAppDispatch()

  if (message) {
    setTimeout(() => dispatch(clearError()), 3000)
  }

  return (
    <div className={styles.wrapper}>
      {message && <span className={styles.message}>{message}</span>}
    </div>
  )
}
