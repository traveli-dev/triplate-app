import Image from 'next/image'
import { css } from '@emotion/react'

type AvatarProps = {
  url: string
  size: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ url, size }: AvatarProps) => {
  const imgSize = { sm: 32, md: 50, lg: 150 }

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

const styles = {
  userImg: css`
    display: inline;
    border-radius: 100px;
  `
}
