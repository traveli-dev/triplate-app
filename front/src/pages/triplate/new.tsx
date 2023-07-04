import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { currentUserSelectors } from '@/redux/features'
import { useGetMyTriplinksWithTriplateUncreatedQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'

const Triplate = () => {
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetMyTriplinksWithTriplateUncreatedQuery(
    currentUserData.uid
  )

  return (
    <>
      <Header
        href={`/${currentUserData.userId}`}
        title="たびのテンプレートを公開"
      />
      <Container bgColor="white" isFull>
        {!data || isLoading ? (
          <>ローディング</>
        ) : (
          <FormCreateUpdateTriplateSettings triplinks={data} />
        )}
      </Container>
    </>
  )
}

export default Triplate
