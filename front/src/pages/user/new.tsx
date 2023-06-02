import { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { FormCreateUpdateUser } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { auth } from '@/lib/firebase'
import { useAppSelector } from '@/redux/rootStore'
import { useCreateUserMutation } from '@/redux/services/firestore'
import { authSelectors } from '@/redux/stores'
import { onAuthStateChanged } from '@/utils/firebase/onAuthStateChanged'

const UserNew = () => {
  const router = useRouter()
  const currentUid = useAppSelector(authSelectors.currentUid)

  // TODO 仮置き ユーザ登録フローの確認のため
  const [disabled, setDisabled] = useState(false)
  const [createUser] = useCreateUserMutation()

  const onCreateUserHandler = async () => {
    setDisabled(true)
    try {
      const user = await onAuthStateChanged(auth)
      // この辺もcreateuserフォーム作る時に直す
      if (!user) return
      if (user.providerData[0].providerId !== 'google.com') return
      if (!user.email) return

      await createUser({
        id: user.uid,
        body: {
          email: user.email,
          icon: user.photoURL,
          name: user.displayName || '',
          userId: user.uid.substring(1, 5),
          description: '',
          links: {
            instagram: null,
            twitter: null
          }
        }
      }).unwrap()
      setDisabled(false)
    } catch (e) {
      setDisabled(false)
      console.error(e)
    }
  }

  // TODO: 仮置き ユーザ登録前に登録キャンセルした場合は認証を消す
  const deleteAuthHandler = () => {
    auth.currentUser?.delete()
    router.push('/')
  }

  return (
    <div>
      {!currentUid ? (
        <p>ログインに失敗しました。大変お手数ですが、再度お試しください</p>
      ) : (
        <>
          <Header title="アカウント作成" />
          <Container bgColor="white" isFull>
            <FormCreateUpdateUser />
            <ButtonFill
              disabled={disabled}
              onClick={async () => {
                await onCreateUserHandler()
                router.push('/home')
              }}
            >
              アカウント作成
            </ButtonFill>
            <button onClick={deleteAuthHandler}>
              アカウント作成を中断する
            </button>
          </Container>
        </>
      )}
    </div>
  )
}

export default UserNew
