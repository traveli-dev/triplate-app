import { RefObject, useEffect, useState } from 'react'

export const useGetHeight = (ref: RefObject<HTMLDivElement>) => {
  const [height, setHeight] = useState<null | number>(null)

  useEffect(() => {
    if (!ref.current) {
      setHeight(0)
      return
    }

    setHeight(ref.current.getBoundingClientRect().height)
  }, [ref])

  return {
    height
  }
}
