import styles from './Dot.module.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectSliderNumber } from '@/store/selectors.ts'
import { goToSlide } from '@/store/reducers/sliderSlice.ts'
import cn from 'classnames'

interface DotProps {
  number: number
}

export const Dot = ({ number }: DotProps) => {
  const dispatch = useAppDispatch()
  const slideNumber = useAppSelector(selectSliderNumber)

  return (
    <div
      className={cn(styles.item, { [styles.selected]: slideNumber === number })}
      onClick={() => dispatch(goToSlide(number))}
    />
  )
}
