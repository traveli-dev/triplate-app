import { RefObject, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useGetHeight } from '@/hooks/modals'

type UseSwipeOptionsType = {
  ref: RefObject<HTMLDivElement>
  isOpen: boolean
  closeModal: () => void
}

export const useSwipe = ({ ref, isOpen, closeModal }: UseSwipeOptionsType) => {
  const { height } = useGetHeight(ref)
  const [deltaY, setDeltaY] = useState(0)

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
        closeModal()
      } else {
        setDeltaY(0)
      }
    }
  })

  const animationStyles = {
    transform: `translateY(${deltaY}px)`,
    transition: `${
      isOpen
        ? 'transform cubic-bezier(0.175, 0.885, 0.32,  1.275) 0.2s'
        : 'transform cubic-bezier(0.50, 0.50, 0.50, 0.50) 0.1s'
    }`
  }

  return {
    handlers,
    animationStyles
  }
}
