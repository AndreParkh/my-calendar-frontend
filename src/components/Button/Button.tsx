import styles from './Button.module.css'
import cn from 'classnames'
import { ButtonProps } from './Button.props.ts'
import { ForwardedRef, forwardRef } from 'react'

const Button = forwardRef(
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
export { Button }
