import { HiOutlinePlus } from 'react-icons/hi'
import styles from '@/styles/components/Buttons/ButtonFollow.module.scss'

type ButtonFollowProps = {
  isFollowing: boolean
}

export const ButtonFollow = ({ isFollowing, ...props }: ButtonFollowProps) => {
  return isFollowing ? (
    <button css={styles.button_following} {...props}>
      フォロー中
    </button>
  ) : (
    <button css={styles.button}>
      <div css={styles.label_wrapper}>
        <HiOutlinePlus size={12} />
        フォロー
      </div>
    </button>
  )
}
