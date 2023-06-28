import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import { Toast, ToastTypes } from '@/components/Toasts'

type Props = {
  children: ReactNode
}

type ContextType = (message: string, type: ToastTypes) => void
export const ToastContext = createContext<ContextType | undefined>(undefined)

export const ToastProvider: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('') // トーストで表示するメッセージ
  const [type, setToastType] = useState<ToastTypes>('success') // トーストで表示するメッセージ
  const [showPortal, setShowPortal] = useState(false)

  const showToast = (message: string, type: ToastTypes) => {
    setVisible(true) // トーストが表示状態になる
    setText(message)
    setToastType(type) // トーストにメッセージがセットされる
  }

  const hideToast = useCallback(() => setVisible(false), [])

  useEffect(() => {
    setShowPortal(true)
  }, [])

  if (!showPortal) {
    return null
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {createPortal(
        <Toast
          hideToast={hideToast}
          text={text}
          type={type}
          visible={visible}
        />,
        document.getElementById('__next')!
      )}
    </ToastContext.Provider>
  )
}
