import { FC, useEffect } from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'
import { styles } from '@/styles/components/Toasts/Toast.styles'

type ToastProps = {
  text: string
  toastType: ToastTypes
  hideToast: () => void
  visible: boolean
}
export type ToastTypes = 'success' | 'error'

export const Toast: FC<ToastProps> = ({
  text,
  toastType,
  hideToast,
  visible
}: ToastProps) => {
  useEffect(() => {
    // 表示状態になってから5秒後、hideToastが遅延実行されて非表示になる
    if (visible) {
      window.setTimeout(() => {
        hideToast()
      }, 2000)
    }
  }, [visible])

  return (
    <div css={styles.toastWrapper(toastType, visible)}>
      <div css={styles.iconWrapper}>
        {toastType == 'success' && <HiOutlineCheckCircle size={24} />}
        {toastType == 'error' && <HiOutlineXCircle size={24} />}
      </div>
      <p css={styles.text}>{text}</p>
    </div>
  )
}
