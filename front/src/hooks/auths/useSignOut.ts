import { useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '@/lib/firebase'
import { clearAll } from '@/redux/actions'
import { useAppDispath } from '@/redux/rootStore'

export const useSignOut = () => {
  const router = useRouter()
  const dispatch = useAppDispath()
  const [disabled, setDisabled] = useState(false)

  const signOutHandler = async () => {
    setDisabled(true)
    try {
      if (!auth.currentUser) {
        setDisabled(false)
        return
      }

      await auth.signOut()

      dispatch(clearAll())

      setDisabled(false)
      router.push('/')
    } catch (e) {
      // TODO: エラーハンドリング
      console.error(e)
      setDisabled(false)
    }
  }

  return { signOutHandler, disabled }
}
