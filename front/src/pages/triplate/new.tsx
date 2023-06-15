import { Container } from '@/components/Containers'
import { FormCreateUpdateTriplateSettings } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'

const Triplate = () => {
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  return (
    <>
      <Header
        href={`/${currentUserData.userId}`}
        title="たびのテンプレートを公開"
      />
      <Container bgColor="white" isFull>
        <FormCreateUpdateTriplateSettings />
      </Container>
    </>
  )
}

export default Triplate
