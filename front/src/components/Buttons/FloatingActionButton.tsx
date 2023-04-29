import { HiOutlinePlus } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/FloatingActionButton.styles'

export const FloatingActionButton = () => {
  return (
    <button css={styles.button}>
      <HiOutlinePlus size={24} />
    </button>
  )
}
