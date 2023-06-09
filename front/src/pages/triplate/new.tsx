import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { Header } from '@/components/Headers'

const Triplate = () => {
  const router = useRouter()
  const userId = 'ma_ma_hima'
  // createしたときのレスポンスでidを受け取る
  const triplateId = 123

  return (
    <>
      <Header href={`/${userId}`} title="旅のテンプレートを公開" />
      <h2>公開するたび</h2>
      <ButtonFill onClick={() => router.push(`/triplate/${triplateId}`)}>
        たびのテンプレートを公開
      </ButtonFill>
    </>
  )
}

export default Triplate
