import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TabimemoEdit = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <>
      <Header href={`/triplink/${triplinkId}`} title="たびメモを編集" />
      <div>
        <Link href={`/triplink/${triplinkId}/edit/tabimemo/budget`}>予算</Link>
      </div>
      <div>
        <Link href={`/triplink/${triplinkId}/edit/tabimemo/items`}>持ち物</Link>
      </div>
      <div>
        <Link href={`/triplink/${triplinkId}/edit/tabimemo/memo`}>メモ</Link>
      </div>
    </>
  )
}

export default TabimemoEdit
