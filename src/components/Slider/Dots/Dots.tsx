import styles from './Dots.module.css'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSlideCount } from '@/store/selectors.ts'
import { Dot } from '@/components/Slider/Dot/Dot.tsx'

export const Dots = () => {
  const slidesCount = useAppSelector(selectSlideCount)

  const renderDots = () => {
    const dots = []

    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }
    return dots
  }

  return <div className={styles.dots}>{renderDots()}</div>
}
