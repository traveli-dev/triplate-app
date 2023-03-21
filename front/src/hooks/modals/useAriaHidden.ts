import { RefObject, useEffect } from 'react'
import { hideOthers } from 'aria-hidden'

export const useAriaHidden = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    return hideOthers(ref.current)
  }, [ref, isOpen])
}
