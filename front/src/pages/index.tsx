import Link from 'next/link'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { BaseHalfModal } from '@/components/Modals/BaseHalfModal'
import { useDisclosure } from '@/hooks/modals'

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
      </Container>
      <BaseHalfModal
        ariaDescribedBy="modalBody"
        ariaLabelledBy="modalHeader"
        isOpen={isOpen}
        onClose={onClose}
      >
        <p id="modalHeader">これがモーダルウィンドウです。</p>
        <div id="modalBody">
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
          <p>content/content</p>
        </div>
      </BaseHalfModal>
    </>
  )
}

export default Index
