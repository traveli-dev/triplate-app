import { ReactNode } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { styles } from '@/styles/components/Inputs/InputErrorMessage.styles'

type InputErrorMessageProps = {
  children: ReactNode
}

export const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return (
    <div css={styles.wrapper}>
      <HiOutlineExclamationCircle css={styles.icon} size={20} />
      <p css={styles.message}>{children}</p>
    </div>
  )
}
