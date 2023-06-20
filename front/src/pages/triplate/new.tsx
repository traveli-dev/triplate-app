import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import { useGetMyTriplinksWithTriplateUncreatedQuery } from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

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
