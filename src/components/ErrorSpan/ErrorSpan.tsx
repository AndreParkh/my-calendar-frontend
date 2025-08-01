import styles from './ErrorSpan.module.css'
import { useAppDispatch } from '@/store/hooks.ts'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

interface ErrorSpanProps {
  message?: string
  clearError?: ActionCreatorWithoutPayload
}

export const ErrorSpan = ({ message, clearError }: ErrorSpanProps) => {
  const dispatch = useAppDispatch()

  if (message && clearError) {
    setTimeout(() => dispatch(clearError()), 3000)
  }

  return (
    <div className={ styles.wrapper }>
      <span className={ styles.message }>{message}</span>
    </div>
  )
}
