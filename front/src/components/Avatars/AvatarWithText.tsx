import { css } from '@emotion/react'
import { Avatar } from '@/components/Avatars'
import { theme } from '@/styles/theme'

type AvatarWithTextProps = {
  url: string
  name: string
}

export const AvatarWithText = ({ url, name }: AvatarWithTextProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.layoutAvatar}>
        <Avatar css={styles.layoutAvatar} size="sm" url={url} />
      </div>
      <p>{name}</p>
    </div>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    & > p {
      margin: auto 0;
      font-size: ${theme.fontSize.sm};
    }
  `,
  layoutAvatar: css`
    margin-right: 16px;
  `
}
