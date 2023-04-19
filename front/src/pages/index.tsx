import Link from 'next/link'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { ModalEdit } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'
import { TravelListItem } from '@/components/travelLists'

const Index = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <div>動作確認なう</div>
        <button onClick={onOpen}>モーダルを開ける</button>
        <div>
          <Link href="/home">/home</Link>
        </div>
        <div>
          <Link href="/create">/create</Link>
        </div>
        <div>
          <Link href="/travelink/123">/travelink/123</Link>
        </div>
        <TravelListItem date="" icon="link" title="" title_memo=""/>
      </Container>
      <ModalEdit isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Index
