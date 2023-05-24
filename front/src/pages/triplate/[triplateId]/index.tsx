import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const userId = 'ma_ma_hima'

  return (
    <>
      <Header href={`/${userId}`} title="いつメンで京都旅行" />
      <p>いつメンで京都旅行いったよ〜</p>
      <div>
        <Link href={`/triplate/${triplateId}/edit/settings`}>
          旅のテンプレートの設定を編集
        </Link>
      </div>
      <div>
        <Link href={`/triplate/${triplateId}/edit/settings`}>
          たびの思い出を編集
        </Link>
      </div>
    </>
  )
}

export default TriplateDetails
