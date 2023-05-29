import { Container } from '@/components/Containers'
import { FormCreate } from '@/components/Forms'
import { Header } from '@/components/Headers'

const TriplinkNew = () => {
  return (
    <>
      <Header href="/home" title="新しいトラベリンクの作成" />
      <Container bgColor="white" isFull>
        <FormCreate />
      </Container>
    </>
  )
}

export default TriplinkNew
