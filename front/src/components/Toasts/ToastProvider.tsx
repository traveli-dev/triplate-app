import { createPortal } from 'react-dom'
import { Toast } from '@/components/Toasts'
import { useToastProvider } from '@/hooks/toasts/useToastProvider'

export const ToastProvider = () => {
  const { toastContainer, toast } = useToastProvider()

  return toastContainer && createPortal(<Toast {...toast} />, toastContainer)
}
