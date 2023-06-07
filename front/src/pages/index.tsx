import Link from 'next/link'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { HiOutlineQrcode } from 'react-icons/hi'
import { ButtonFill } from '@/components/Buttons'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons/ButtonIconWithTextHorizontal'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { ModalMember } from '@/components/Modals'
import { useSignOut } from '@/hooks/auths'
import { useDisclosure } from '@/hooks/modals'
import { auth } from '@/lib/firebase'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'

const Index = () => {
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { signOutHandler } = useSignOut()
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  // 仮置き
  const signInTestUser = async () => {
    await signInWithEmailAndPassword(auth, 'test@example.com', 'password')
    router.push('/home')
  }

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue">
        <div>
          <ul>
            <li>name: {currentUser.name}</li>
            <li>userId: {currentUser.userId}</li>
          </ul>
        </div>
        <div>
          <ButtonFill
            onClick={() => {
              router.push('/auth?redirectUri=/user/new')
            }}
          >
            サインイン
          </ButtonFill>
          <ButtonFill onClick={signOutHandler}>サインアウト</ButtonFill>
        </div>
        <div>CI確認用</div>
        <div>
          <Link href="/home">/home</Link>
        </div>
        <div>
          <Link href="/create">/create</Link>
        </div>
        <div>
          <Link href="/triplink/123">/triplink/123</Link>
        </div>
      </Container>
      <ButtonIconWIthTextHorizontal
        Icon={HiOutlineQrcode}
        title="aaaa"
        onClick={onOpen}
      />

      {process.env.NODE_ENV === 'development' && (
        <ButtonFill onClick={signInTestUser}>
          テストユーザでログイン（シードデータ）
        </ButtonFill>
      )}
      <ModalMember isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Index
