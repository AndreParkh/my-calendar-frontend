import styles from './Slide.module.css'

interface SlideProps {
  src: string
  alt: string
}

export const Slide = ({ src, alt }: SlideProps) => {
  return <img className={styles.slide} src={src} alt={alt} />
}
