import styles from './Button.module.css'
import cn from 'classnames'
import { ButtonProps } from './Button.props.ts'
import { ForwardedRef, forwardRef } from 'react'

const Button = forwardRef(
  (
    { className, children, onSubmit, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={cn(styles.btn, className)}
        onSubmit={onSubmit}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
export default Button
