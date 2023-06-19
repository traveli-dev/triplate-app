import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import { useGetTriplateQuery } from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)
  const { data, isLoading } = useGetTriplateQuery({
    triplateId: String(triplateId)
  })

  return (
    <div>
      {!data || isLoading ? (
        <>ローディング</>
      ) : (
        <>
          <Header href={`/${currentUserData.userId}`} title={data.title} />
          <p>{data.description}</p>
          <div>
            <Link href={`/triplate/${triplateId}/edit/settings`}>
              旅のテンプレートの設定を編集
            </Link>
          </div>
          <div>
            <Link href={`/triplate/${triplateId}/edit/memory`}>
              たびの思い出を編集
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default TriplateDetails
