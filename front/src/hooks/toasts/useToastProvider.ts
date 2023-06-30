import { useEffect, useRef, useState } from 'react'
import { hideToast, toastSelectors } from '@/redux/features'
import { useAppDispath, useAppSelector } from '@/redux/store'

export const useToastProvider = () => {
  const toast = useAppSelector(toastSelectors.toast)
  const dispatch = useAppDispath()
  const ref = useRef<Element | null>(null)
  const [documentMounted, setDocumentMounted] = useState(false)

  useEffect(() => {
    if (toast.visible) {
      // トーストが表示されていたら，3秒で消す（cssのアニメーションの秒数）
      const timeoutId = setTimeout(() => {
        dispatch(hideToast())
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [toast, dispatch])

  useEffect(() => {
    setDocumentMounted(true)
    ref.current = document.getElementById('__next')
  }, [])

  return { toast, documentMounted, ref }
}
