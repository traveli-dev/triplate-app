import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const TriplateEditMemory = () => {
  const router = useRouter()
  const { triplateId } = router.query

  return <Header href={`/triplate/${triplateId}`} title="たびの思い出を編集" />
}

export default TriplateEditMemory
