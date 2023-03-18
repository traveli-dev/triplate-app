import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { NavigationBottom } from '@/components/Navigations'

const Index = () => {
  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
        <div>HelloWorld</div>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Index
