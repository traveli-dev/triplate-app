import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { BaseHalfModal } from '@/components/Modals'
import { useModal } from '@/hooks/modals'

const Index = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <div>HelloWorld</div>
        <button onClick={openModal}>open</button>
      </Container>
      <BaseHalfModal
        isOpen={isOpen}
        ariaLabelledBy="modalHeader"
        ariaDescribedBy="modalBody"
        onClose={closeModal}
      >
        <p id="modalHeader">これがモーダルウィンドウです。</p>
        <p id="modalBody">
          <button onClick={closeModal}>close</button>
        </p>
      </BaseHalfModal>
    </>
  )
}

export default Index
