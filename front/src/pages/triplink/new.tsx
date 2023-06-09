import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplink } from '@/components/Forms'
import { Header } from '@/components/Headers'

const TriplinkNew = () => {
  return (
    <>
      <Header href="/home" title="新しいトラベリンクの作成" />
      <Container bgColor="white" isFull>
        <FormCreateUpdateTriplink />
      </Container>
    </>
  )
}

export default TriplinkNew
