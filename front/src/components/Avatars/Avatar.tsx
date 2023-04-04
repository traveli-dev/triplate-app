import Image from 'next/image'
import { css } from '@emotion/react'

type AvatarProps = {
  url: string
  size: 'sm' | 'md' | 'lg'
  className?: string
}

export const Avatar = ({ url, size, className }: AvatarProps) => {
  const imgSize = { sm: 32, md: 50, lg: 150 }

  return (
    <Image
      className={className}
      src={url}
      alt="user_img"
      width={imgSize[size]}
      height={imgSize[size]}
      css={styles.userImg}
    />
  )
}

const styles = {
  userImg: css`
    border-radius: 100px;
    display: inline;
  `
}
