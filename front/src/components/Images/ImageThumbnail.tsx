import Image from 'next/image'
import { styles } from '@/styles/components/Images/ImageThumbnail.styles'

type ImageThumbnailProps = {
  url: string
}

export const ImageThumbnail = ({ url }: ImageThumbnailProps) => {
  return (
    <div css={styles.wrapper}>
      <Image alt="thumbnail_image" css={styles.img} fill src={url} />
    </div>
  )
}
