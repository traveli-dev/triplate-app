import Link from 'next/link'
import { HiOutlineQrcode } from 'react-icons/hi'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons/ButtonIconWithTextHorizontal'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { ModalMember } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'
import { useAppSelector } from '@/redux/rootStore'
import { authSelectors } from '@/redux/stores'

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // 確認よう
  const currentUser = useAppSelector(authSelectors.currentUser)

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue">
        <div>動作確認なう</div>
        <h1>{currentUser.uid}</h1>
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
      <ModalMember isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Index
