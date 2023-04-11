import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'

const Index = () => {
  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <div>どうさかくにん</div>
      </Container>
    </>
  )
}

export default Index
