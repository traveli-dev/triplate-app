import { createPortal } from 'react-dom'
import { Toast } from '@/components/Toasts'
import { useToastProvider } from '@/hooks/toasts/useToastProvider'

export const ToastProvider = () => {
  const { toast, documentMounted, ref } = useToastProvider()

  return documentMounted && ref.current ? (
    createPortal(<Toast {...toast} />, ref.current)
  ) : (
    <div></div>
  )
}
