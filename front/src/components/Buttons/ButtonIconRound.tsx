import styles from '@/styles/components/Buttons/ButtonIconRound.module.scss'
import { HiOutlinePlus } from 'react-icons/hi'

export const ButtonIconRound = () => {
  return (
    <button className={styles.button}>
      <HiOutlinePlus size={24} />
    </button>
  )
}
