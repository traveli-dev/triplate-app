import { RefObject, useEffect } from 'react'
import { clearBodyLocks, lock } from 'tua-body-scroll-lock'

export const useDisableScroll = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) return

    lock(ref.current)

    return clearBodyLocks
  }, [ref, isOpen])
}
