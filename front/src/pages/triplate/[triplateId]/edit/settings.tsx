import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import {
  useGetMyTriplinksWithTriplateUncreatedQuery,
  useGetTriplateQuery
} from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  const { data: triplateData, isLoading: isTriplateDataLoading } =
    useGetTriplateQuery(String(triplateId))
  const { data: triplinkData, isLoading: isTriplinkDataLoading } =
    useGetMyTriplinksWithTriplateUncreatedQuery(currentUserData.uid)

  const isLoading =
    !triplateData ||
    !triplinkData ||
    isTriplateDataLoading ||
    isTriplinkDataLoading

  return (
    <>
      <Header
        href={`/triplate/${triplateId}`}
        title="たびのテンプレートの設定を編集"
      />
      <Container bgColor="white" isFull>
        {isLoading ? (
          <>ローディング</>
        ) : (
          <FormCreateUpdateTriplateSettings
            data={triplateData}
            triplinks={triplinkData}
          />
        )}
      </Container>
    </>
  )
}

export default TriplateEditSettings
