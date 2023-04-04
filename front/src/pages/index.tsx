import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'

const Index = () => {
  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <a href={'/create'}>Createページ</a>
        <div>HelloWorld</div>
      </Container>
    </>
  )
}

export default Index
