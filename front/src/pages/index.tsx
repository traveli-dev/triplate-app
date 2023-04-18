import Link from 'next/link'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'

const Index = () => {
  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue" isFull>
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
    </>
  )
}

export default Index
