import styles from './Dots.module.css'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSlideCount } from '@/store/selectors.ts'
import { Dot } from '@/components/Slider/Dot/Dot.tsx'

export const Dots = () => {
  const slidesCount = useAppSelector(selectSlideCount)
  const dots = new Array(slidesCount)

  return (
    <div className={styles.dots}>
      {[...dots].map((_, idx) => (
        <Dot key={`dot-${idx}`} number={idx} />
      ))}
    </div>
  )
}
