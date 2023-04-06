import Image from 'next/image'
import styles from '@/styles/components/Images/ImageThumbnail.module.scss'

type ImageThumbnailProps = {
  url: string
}

export const ImageThumbnail = ({ url }: ImageThumbnailProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={url} alt="thumbnail_image" fill className={styles.img} />
    </div>
  )
}
