import { HiOutlinePlus } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonIconRound.styles'

export const ButtonIconRound = () => {
  return (
    <button css={styles.button}>
      <HiOutlinePlus size={24} />
    </button>
  )
}
