import { RefObject, useEffect } from 'react'
import { createFocusTrap } from 'focus-trap'

type UseFocusTrapOptionsType = {
  ref: RefObject<HTMLElement>
  isOpen: boolean
  closeModal: () => void
}

export const useFocusTrap = ({
  ref,
  isOpen,
  closeModal
}: UseFocusTrapOptionsType) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: closeModal
    })
    trap.activate()

    return () => {
      trap.deactivate()
    }
  }, [ref, isOpen])
}
