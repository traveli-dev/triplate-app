import { RefObject, useEffect } from 'react'
import { hideOthers } from 'aria-hidden'

export const useAriaHidden = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen || ref.current === null) return

    // defaultでparentNodeはbodyだが，bodyにはscriptタグが含まれており，scriptタグにaria-hiddenをつけてはいけないのでmainにする
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden
    const parentNode = document.querySelector('main')

    return hideOthers(ref.current, parentNode || undefined)
  }, [ref, isOpen])
}
