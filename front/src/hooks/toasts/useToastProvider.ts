import { useEffect } from 'react'
import { hideToast, toastSelectors } from '@/redux/features'
import { useAppDispath, useAppSelector } from '@/redux/store'

export const useToastProvider = () => {
  const toastContainer = document.getElementById('__next')

  const toast = useAppSelector(toastSelectors.toast)
  const dispatch = useAppDispath()

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast())
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [toast, dispatch])

  return { toastContainer, toast }
}
