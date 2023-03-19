import { Avatar } from '@/components/Avatars'
import styles from '@/styles/components/Avatars/AvatarWithText.module.scss'

type AvatarWithTextProps = {
  url: string
  name: string
}

export const AvatarWithText = ({ url, name }: AvatarWithTextProps) => {
  return (
    <div className={styles.wrapper}>
      <Avatar url={url} size={'sm'} />
      <p>{name}</p>
    </div>
  )
}
