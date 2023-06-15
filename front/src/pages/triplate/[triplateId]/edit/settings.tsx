import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useGetTriplateSettingsQuery } from '@/redux/services/firestore'

const TriplateEditSettings = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const { data, isLoading } = useGetTriplateSettingsQuery(String(triplateId))

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
