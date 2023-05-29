import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TabimemoItems = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <Header
      href={`/triplink/${triplinkId}/edit/tabimemo`}
      title="持ち物を編集"
    />
  )
}

export default TabimemoItems
