import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

const validRedirectPages = ['/user/new']

export const useSignIn = () => {
  const router = useRouter()

  const signInHandler = async () => {
    const result = await getRedirectResult(auth)
    const { redirectUri } = router.query

    // 適切なリダイレクト先が設定されていない場合は認証しない
    if (!validRedirectPages.includes(String(redirectUri))) {
      router.push('/')
      return
    }

    if (!result) {
      try {
        await signInWithRedirect(auth, new GoogleAuthProvider())
      } catch (e) {
        router.push('/')
      }
    } else {
      const { redirectUri } = router.query

      // 任意のページにリダイレクトできないように検証する（オープンリダイレクト対策）
      // https://qiita.com/tamura__246/items/f41d2f69f1c8494493e0
      if (redirectUri === '/user/new') {
        router.push('/user/new')
      } else {
        router.push('/')
      }
    }
  }

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    signInHandler()
  }, [router.isReady])
}
