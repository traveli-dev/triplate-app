import { RefObject, useEffect } from 'react'
import { createFocusTrap } from 'focus-trap'

type UseFocusTrapOptionsType = {
  ref: RefObject<HTMLDivElement>
  isOpen: boolean
  onClose: () => void
}

export const useFocusTrap = ({
  ref,
  isOpen,
  onClose
}: UseFocusTrapOptionsType) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) return

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: onClose
    })
    trap.activate()

    return () => {
      trap.deactivate()
    }
  }, [ref, isOpen])
}
