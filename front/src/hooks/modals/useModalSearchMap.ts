import { useRef } from 'react'
import { useAriaHidden } from '@/hooks/modals/useAriaHidden'
import { useDisableScroll } from '@/hooks/modals/useDisableScroll'
import { useDisclosure } from '@/hooks/modals/useDisclosure'
import { useFocusTrap } from '@/hooks/modals/useFocusTrap'

export const useModalSearchMap = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const ref = useRef<HTMLDivElement>(null)

  useAriaHidden(ref, isOpen)
  useDisableScroll(ref, isOpen)
  useFocusTrap({ ref, isOpen, onClose })

  return {
    onOpen,
    onClose,
    isOpen,
    ref
  }
}
