import { Avatar } from '@/components/Avatars'
import { styles } from '@/styles/components/Avatars/AvatarWithText.styles'

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
