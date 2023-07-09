import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUser } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { auth } from '@/lib/firebase'
import { authSelectors } from '@/redux/features'
import { useAppSelector } from '@/redux/store'
import { styles } from '@/styles/pages/user/new.styles'

const UserNew = () => {
  const router = useRouter()
  const authUser = useAppSelector(authSelectors.currentAuthUser)
  const [window, setWindow] = useState<'setName' | 'setProfile'>('setName')

  const deleteAuthHandler = () => {
    if (auth.currentUser) {
      auth.currentUser.delete()
    }
    router.push('/')
  }

  return (
    <div>
      {!authUser.uid || !authUser.icon ? (
        <p>ログインに失敗しました。大変お手数ですが、再度お試しください</p>
      ) : (
        <>
          {window === 'setName' ? (
            <Header title="アカウント作成" />
          ) : (
            <Header
              title="プロフィール設定"
              onClick={() => setWindow('setName')}
            />
          )}
          <Container bgColor="white" isFull>
            <FormCreateUser
              authUser={{
                icon: authUser.icon,
                uid: authUser.uid
              }}
              setWindow={setWindow}
              window={window}
            />
            {window === 'setName' && (
              <button css={styles.cancelButton} onClick={deleteAuthHandler}>
                やっぱりやめる
              </button>
            )}
          </Container>
        </>
      )}
    </div>
  )
}

export default UserNew
