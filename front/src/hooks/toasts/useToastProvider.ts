import { useEffect, useRef } from 'react'
import { hideToast, toastSelectors } from '@/redux/features'
import { useAppDispath, useAppSelector } from '@/redux/store'

export const useToastProvider = () => {
  const toast = useAppSelector(toastSelectors.toast)
  const dispatch = useAppDispath()
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    // トーストが表示されていたら，3秒で消す（cssのアニメーションの秒数）
    if (toast.visible) {
      const timeoutId = setTimeout(() => {
        dispatch(hideToast())
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [toast, dispatch])

  useEffect(() => {
    ref.current = document.getElementById('__next')
  }, [])

  return { toast, ref }
}
