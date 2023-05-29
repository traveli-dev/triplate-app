import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '@/lib/firebase'
import { useAppDispath, useAppSelector } from '@/redux/rootStore'
import { usersApi } from '@/redux/services/firestore'
import { authSelectors, setUser } from '@/redux/stores'
import { onAuthStateChanged } from '@/utils/firebase'

export const useCheckAuth = () => {
  const router = useRouter()
  const dispatch = useAppDispath()

  const currentUserUid = useAppSelector(authSelectors.currentUserUid)

  // TODO: roleの実装
  const staticPages = ['/404', '/auth']
  const signInRequiredPages = [
    '/home',
    '/notifications',
    '/settings',
    '/triplate/new',
    '/triplink'
  ]

  const isCurrentPageStatic = staticPages.includes(router.pathname)
  const isCurrentPageRequireUserRegistration = signInRequiredPages.includes(
    router.pathname
  )

  const checkAuth = async () => {
    try {
      const user = await onAuthStateChanged(auth)

      // ログイン中
      if (user) {
        dispatch(
          setUser({
            uid: user.uid
          })
        )

        // ユーザ登録済みか確認する
        const { data } = await dispatch(
          usersApi.endpoints.getUser.initiate(user.uid)
        )
        const isRegisteredUser = !!data?.userId || false

        // 認証必要ページは，ユーザ未登録の場合はトップにリダイレクト
        if (isCurrentPageRequireUserRegistration && !isRegisteredUser) {
          router.push('/')
          return
        }

        // ユーザ登録済みで/user/newにアクセスした場合
        if (isRegisteredUser && router.pathname === '/user/new') {
          router.push('/home')
          return
        }

        // ログアウト or 未認証ユーザ
      } else {
        dispatch(
          setUser({
            uid: null
          })
        )
        // ユーザ登録必須ページにいる場合はトップページにリダイレクト
        if (isCurrentPageRequireUserRegistration) {
          router.push('/')
          return
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    // ログインなしてアクセス可能なページには認証確認しない
    if (isCurrentPageStatic) return

    checkAuth()
  }, [router.pathname, currentUserUid])

  return {
    isCurrentPageStatic,
    isCurrentPageRequireUserRegistration
  }
}
