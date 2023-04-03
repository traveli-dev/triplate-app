import { RefObject, useEffect } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

type UseDisableScrollOptionsType = {
  ref: RefObject<HTMLDivElement>
  isOpen: boolean
}

export const useDisableScroll = ({
  ref,
  isOpen
}: UseDisableScrollOptionsType) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) return

    disableBodyScroll(ref.current)

    return clearAllBodyScrollLocks
  }, [ref, isOpen])
}
