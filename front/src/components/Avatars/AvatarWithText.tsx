import { Avatar } from '@/components/Avatars'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type AvatarWithTextProps = {
  url: string
  name: string
}

export const AvatarWithText = ({ url, name }: AvatarWithTextProps) => {
  return (
    <div css={wrapper}>
      <Avatar url={url} size={'sm'} />
      <p>{name}</p>
    </div>
  )
}

const wrapper = css`
  display: flex;
  gap: 16px;
  & > p {
    font-size: ${theme.fontSize.sm};
    margin: auto 0;
  }
`
