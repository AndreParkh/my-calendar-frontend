import styles from './Input.module.css'
import cn from 'classnames'
import {
  ForwardedRef,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react'
import { ErrorSpan } from '@/components'
import { FieldError } from 'react-hook-form'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError
}

export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          className={cn(styles.input, className, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        <ErrorSpan message={error?.message} />
      </div>
    )
  },
)
