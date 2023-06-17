import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import {
  useGetJoinTripsWithTriplateCreatedQuery,
  useGetMyTripsWithTriplateCreatedQuery,
  useGetTriplateQuery
} from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)
  const { data: myTripsData, isLoading: isMyTripsDataLoading } =
    useGetMyTripsWithTriplateCreatedQuery(currentUserData.uid)
  const { data: joinTripsData, isLoading: isJoinTripsDataLoading } =
    useGetJoinTripsWithTriplateCreatedQuery(currentUserData.uid)
  const { data: triplateData, isLoading: isTriplateDataLoading } =
    useGetTriplateQuery(String(triplateId))

  const isLoading =
    !myTripsData ||
    !joinTripsData ||
    !triplateData ||
    isMyTripsDataLoading ||
    isJoinTripsDataLoading ||
    isTriplateDataLoading

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
            triplinks={[...myTripsData, ...joinTripsData]}
          />
        )}
      </Container>
    </>
  )
}

export default TriplateEditSettings
