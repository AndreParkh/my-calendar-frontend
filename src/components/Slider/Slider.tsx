import styles from './Slider.module.css'
import { SliderList } from '@/components/Slider/SliderList/SliderList.tsx'
import { Dots } from '@/components/Slider/Dots/Dots.tsx'

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <SliderList />
      <Dots />
    </div>
  )
}
