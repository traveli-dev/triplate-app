import { Avatar } from '@/components/Avatars'
import { styles } from '@/styles/components/Avatars/AvatarWithText.styles'

export type AvatarWithTextProps = {
  url: string
  name: string
  fontSize: 'sm' | 'md'
  avatarSize: 'sm' | 'md' | 'lg'
}

export const AvatarWithText = ({
  url,
  name,
  fontSize,
  avatarSize
}: AvatarWithTextProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.layoutAvatar}>
        <Avatar css={styles.layoutAvatar} size={avatarSize} url={url} />
      </div>
      <p css={styles.text({ fontSize })}>{name}</p>
    </div>
  )
}
