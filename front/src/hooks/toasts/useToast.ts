import { showToast } from '@/redux/features'
import { useAppDispath } from '@/redux/store'

export const useToast = () => {
  const dispatch = useAppDispath()

  const openToast = (message: string, type: 'error' | 'success') => {
    dispatch(showToast({ type, message }))
  }

  return { openToast }
}
