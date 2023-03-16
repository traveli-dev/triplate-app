import Image from 'next/image'
import styles from '@/styles/components/Avatars/Avatar.module.scss'

type AvatarProps = {
  size: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ size }: AvatarProps) => {
  const imgSize = { sm: 32, md: 50, lg: 150 }
  console.log()

  return (
    <Image
      src={'/images/user_sample.jpeg'}
      alt={'user_img'}
      width={imgSize[size]}
      height={imgSize[size]}
      className={`${styles.user_img}`}
    />
  )
}
