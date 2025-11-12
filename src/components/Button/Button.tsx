import styles from './Button.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Color = 'blue' | 'gray' | 'transparent' | 'black'
type Size = 'small' | 'medium'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: Color
  size: Size
}

export const Button = forwardRef(
  (
    { className, color, size, children, onClick, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={cn(className, styles.button, {
          [styles.blue]: color === 'blue',
          [styles.gray]: color === 'gray',
          [styles.transparent]: color === 'transparent',
          [styles.black]: color === 'black',
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
        })}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
