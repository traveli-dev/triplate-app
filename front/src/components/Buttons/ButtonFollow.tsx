import styles from '@/styles/components/Buttons/ButtonFollow.module.scss'
import { HiOutlinePlus } from 'react-icons/hi'
type ButtonFollowProps = {
  isFollowing: boolean
}

export const ButtonFollow = ({ isFollowing }: ButtonFollowProps) => {
  return isFollowing ? (
    <button className={styles.button_following}>{'フォロー中'}</button>
  ) : (
    <button className={styles.button}>
      <div className={styles.label_wrapper}>
        <HiOutlinePlus size={12} />
        {'フォロー'}
      </div>
    </button>
  )
}
