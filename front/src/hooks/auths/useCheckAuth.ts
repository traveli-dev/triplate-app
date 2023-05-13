import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispath } from '@/redux/rootStore'
import { setUser } from '@/redux/stores'

export const useCheckAuth = () => {
  const router = useRouter()
  const dispatch = useAppDispath()
  const [isSignIn, setIsSignIn] = useState(false)

  const checkAuth = () => {
    try {
      dispatch(
        setUser({
          uid: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd'
        })
      )
      setIsSignIn(true)
    } catch (e) {
      console.error(e)
      setIsSignIn(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [router.pathname])

  return {
    isSignIn
  }
}
