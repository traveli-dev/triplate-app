import styles from '@/styles/components/Inputs/InputImage.module.scss'
import Image from 'next/image'
import { InputHTMLAttributes } from 'react'

type InputImageProps = InputHTMLAttributes<HTMLDivElement> & {
  src: string
  alt: string
}

export const InputImage = ({ src, alt }: InputImageProps) => {
  return (
    <div className={styles.image_wrapper}>
      <Image className={styles.image} src={src} alt={alt} fill />
    </div>
  )
}
