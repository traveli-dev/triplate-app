import Image from 'next/image'
import styles from '@/styles/components/Avatars/Avatar.module.scss'

type AvatarProps = {
  url: string
  size: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ url, size }: AvatarProps) => {
  const imgSize = { sm: 32, md: 50, lg: 150 }

  return (
    <Image
      src={url}
      alt="user_img"
      width={imgSize[size]}
      height={imgSize[size]}
      className={styles.user_img}
    />
  )
}
