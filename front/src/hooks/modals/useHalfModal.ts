import { useRef } from 'react'
import { useAriaHidden, useDisableScroll, useFocusTrap } from '@/hooks/modals'

export const useHalfModal = (isOpen: boolean, onClose: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useAriaHidden(ref, isOpen)
  useDisableScroll(ref, isOpen)
  useFocusTrap({ ref, isOpen, onClose })

  return {
    ref
  }
}
