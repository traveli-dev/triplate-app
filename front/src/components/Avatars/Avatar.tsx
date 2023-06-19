import Image from 'next/image'
import { styles } from '@/styles/components/Avatars/Avatar.styles'

type AvatarProps = {
  url: string
  size: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ url, size }: AvatarProps) => {
  const imgSize = { sm: 32, md: 50, lg: 110 }

  return (
    <Image
      alt="user_img"
      css={styles.userImg}
      height={imgSize[size]}
      src={url}
      width={imgSize[size]}
    />
  )
}
