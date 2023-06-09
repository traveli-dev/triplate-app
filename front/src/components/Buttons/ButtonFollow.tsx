import { styles } from '@/styles/components/Buttons/ButtonFollow.styles'

type ButtonFollowProps = {
  isFollowing: boolean
}

export const ButtonFollow = ({ isFollowing, ...props }: ButtonFollowProps) => {
  return isFollowing ? (
    <button css={styles.button(isFollowing)} {...props}>
      フォロー中
    </button>
  ) : (
    <button css={styles.button(isFollowing)}>フォロー</button>
  )
}
