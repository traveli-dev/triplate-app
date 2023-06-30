import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'
import { styles } from '@/styles/components/Toasts/Toast.styles'

type ToastProps = {
  message: string
  visible: boolean
  type: 'success' | 'error'
}

export const Toast = ({ message, type, visible }: ToastProps) => {
  return (
    <div css={styles.toastWrapper(type, visible)}>
      <div css={styles.iconWrapper}>
        {type == 'success' && <HiOutlineCheckCircle size={24} />}
        {type == 'error' && <HiOutlineXCircle size={24} />}
      </div>
      <p css={styles.text}>{message}</p>
    </div>
  )
}
