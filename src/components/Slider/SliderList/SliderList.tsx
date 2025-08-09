import styles from './SliderList.module.css'
import { slides } from '../slides'
import { Slide } from '@/components/Slider/Slide/Slide.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { selectSliderNumber } from '@/store/selectors.ts'

export const SliderList = () => {
  const slideNumber = useAppSelector(selectSliderNumber)

  return (
    <div
      className={styles.sliderList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {slides.map((slide, idx) => (
        <Slide key={idx} src={slide.src} alt={slide.alt} />
      ))}
    </div>
  )
}
