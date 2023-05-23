import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { Header } from '@/components/Headers'

const UserNew = () => {
  const router = useRouter()

  return (
    <>
      <Header href="/home" title="アカウント作成" />
      <ButtonFill onClick={() => router.push('/home')}>
        アカウント作成
      </ButtonFill>
    </>
  )
}

export default UserNew
