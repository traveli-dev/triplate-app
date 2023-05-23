import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query

  return (
    <Header
      href={`/triplate/${triplateId}`}
      title="たびのテンプレートの設定を編集"
    />
  )
}

export default TriplateEditSettings
