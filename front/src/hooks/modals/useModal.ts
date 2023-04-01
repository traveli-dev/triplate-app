import { RefObject, useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { createFocusTrap } from 'focus-trap'
import { useGetHeight } from '@/hooks/modals/useGetHeight'

type UseModalOptionsType = {
  ref: RefObject<HTMLDivElement>
  isOpen: boolean
  onClose: () => void
}

export const useModal = ({ ref, isOpen, onClose }: UseModalOptionsType) => {
  const { height } = useGetHeight(ref)
  const [deltaY, setDeltaY] = useState(0)

  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: closeModal,
      onPostDeactivate: () => {
        onClose()
        setDeltaY(0)
      }
    })
    trap.activate()

    return () => {
      trap.deactivate()
    }
  }, [ref, isOpen, onClose])

  const handlers = useSwipeable({
    onSwiping: (e) => {
      if (e.deltaY >= 0) {
        setDeltaY(e.deltaY)
      }
    },
    onSwipedDown: (e) => {
      const FLICK_THRESHOLD = 0.6
      const isFlick = e.velocity > FLICK_THRESHOLD
      if (!height) return
      if (isFlick || e.deltaY >= (height * 1) / 3) {
        setDeltaY(height)
      } else {
        setDeltaY(0)
      }
    }
  })

  const cleanUpModal = () => {
    if (isOpen && deltaY === height) {
      onClose()
      setDeltaY(0)
    }
  }

  const closeModal = () => {
    if (!height) return
    setDeltaY(height)
  }

  const animationStyles = {
    transform: isOpen ? `translateY(${deltaY}px)` : 'translateY(100%)',
    transition: isOpen
      ? 'transform cubic-bezier(0.175, 0.885, 0.32,  1.275) 0.2s'
      : 'transform cubic-bezier(0.5, 0.5, 0.5, 0.5) 0.2s;'
  }

  return {
    handlers,
    cleanUpModal,
    animationStyles,
    closeModal
  }
}
