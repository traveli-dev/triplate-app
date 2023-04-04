import { Avatar } from '@/components/Avatars'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type AvatarWithTextProps = {
  url: string
  name: string
}

export const AvatarWithText = ({ url, name }: AvatarWithTextProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.layoutAvatar}>
        <Avatar url={url} size={'sm'} css={styles.layoutAvatar} />
      </div>
      <p>{name}</p>
    </div>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    & > p {
      font-size: ${theme.fontSize.sm};
      margin: auto 0;
    }
  `,
  layoutAvatar: css`
    margin-right: 16px;
  `
}
