import { FC, useEffect, useState } from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'
import { styles } from '@/styles/components/Toasts/Toast.styles'

type ToastProps = {
  text: string
  type: ToastTypes
  hideToast: () => void
  visible: boolean
}
export type ToastTypes = 'success' | 'error'

export const Toast: FC<ToastProps> = ({
  text,
  type,
  hideToast,
  visible
}: ToastProps) => {
  // setTimeoutのタイムアウト識別子を管理するローカルState
  const [timeoutId, setTimeoutId] = useState<number>()

  useEffect(() => {
    if (visible) {
      // タイムアウト識別子をクリア => 識別子が存在している、つまりトーストが既に表示されている場合『5秒後に消える』という遅延実行がクリアされる
      clearTimeout(timeoutId)

      // 5秒後にトーストを非表示にする
      const id = window.setTimeout(() => {
        hideToast()
      }, 3000)

      // タイムアウト識別子を保存。この後clearTimeoutが実行されなければ5秒後にトーストが非表示になる
      setTimeoutId(id)
    }
  }, [visible, text])

  return (
    <div css={styles.toastWrapper(type, visible)}>
      <div css={styles.iconWrapper}>
        {type == 'success' && <HiOutlineCheckCircle size={24} />}
        {type == 'error' && <HiOutlineXCircle size={24} />}
      </div>
      <p css={styles.text}>{text}</p>
    </div>
  )
}
