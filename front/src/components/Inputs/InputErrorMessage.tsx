import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { styles } from '@/styles/components/Inputs/InputErrorMessage.styles'

type InputErrorMessageProps = {
  message: string
}

export const InputErrorMessage = ({ message }: InputErrorMessageProps) => {
  return (
    <div css={styles.wrapper}>
      <HiOutlineExclamationCircle css={styles.icon} size={20} />
      <p css={styles.message}>{message}</p>
    </div>
  )
}
