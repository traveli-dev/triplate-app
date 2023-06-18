import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import { useGetTriplateQuery } from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)
  const { data, isLoading } = useGetTriplateQuery(String(triplateId))

  return (
    <>
      <Header
        href={`/triplate/${triplateId}`}
        title="たびのテンプレートの設定を編集"
      />
      <Container bgColor="white" isFull>
        {!data || isLoading ? (
          <>ローディング</>
        ) : (
          <div>
            {currentUserData.uid !== data.ownerId ? (
              <>その操作は許可されていません</>
            ) : (
              <FormCreateUpdateTriplateSettings data={data} />
            )}
          </div>
        )}
      </Container>
    </>
  )
}

export default TriplateEditSettings
