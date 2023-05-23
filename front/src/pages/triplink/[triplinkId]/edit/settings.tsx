import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TriplinkEditSettings = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <>
      <Header href={`/triplink/${triplinkId}`} title="たびの情報を編集" />
      <h2>たびの名前</h2>
      <input />
      <h2>サムネイルの画像</h2>
    </>
  )
}

export default TriplinkEditSettings
