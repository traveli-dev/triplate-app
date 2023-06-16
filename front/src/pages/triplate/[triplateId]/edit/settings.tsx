import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useGetTriplateQuery } from '@/redux/services/firestore'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query

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
          <FormCreateUpdateTriplateSettings data={data} />
        )}
      </Container>
    </>
  )
}

export default TriplateEditSettings
