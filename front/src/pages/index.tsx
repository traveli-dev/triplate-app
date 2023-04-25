import Link from 'next/link'
import { HiOutlineQrcode } from 'react-icons/hi'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons/ButtonIconWithTextHorizontal'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { ModalMember } from '@/components/Modals/ModalMember'
import { useDisclosure } from '@/hooks/modals'

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue">
        <div>動作確認なう</div>
        <div>
          <Link href="/home">/home</Link>
        </div>
        <div>
          <Link href="/create">/create</Link>
        </div>
        <div>
          <Link href="/travelink/123">/travelink/123</Link>
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
