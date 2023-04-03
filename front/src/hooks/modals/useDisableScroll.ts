import { RefObject, useEffect } from 'react'
import { clearBodyLocks, lock } from 'tua-body-scroll-lock'

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

    lock(ref.current)

    return clearBodyLocks
  }, [ref, isOpen])
}
