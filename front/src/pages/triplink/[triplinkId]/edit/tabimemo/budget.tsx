import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TabimemoBudget = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <Header href={`/triplink/${triplinkId}/edit/tabimemo`} title="予算を編集" />
  )
}

export default TabimemoBudget
