import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { BaseHalfModal } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <div>HelloWorld</div>
        <button onClick={onOpen}>open</button>
      </Container>
      <BaseHalfModal
        isOpen={isOpen}
        ariaLabelledBy="modalHeader"
        ariaDescribedBy="modalBody"
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
