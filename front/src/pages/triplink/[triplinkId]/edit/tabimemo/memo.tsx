import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TabimemoMemo = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <Header href={`/triplink/${triplinkId}/edit/tabimemo`} title="メモを編集" />
  )
}

export default TabimemoMemo
