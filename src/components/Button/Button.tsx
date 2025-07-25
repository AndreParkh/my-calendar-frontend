import styles from './Button.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = forwardRef(
  (
    { className, children, onClick, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={cn(styles.button, className)}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
