import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { useUpdateTriplateMutation } from '@/redux/services/firestore'

const TriplateEditMemory = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const [updateTriplate] = useUpdateTriplateMutation()

  return (
    <>
      <Header href={`/triplate/${triplateId}`} title="たびの思い出を編集" />
      <Container bgColor="white" isFull>
        <ButtonFill
          onClick={async () => {
            await updateTriplate({
              id: String(triplateId),
              body: { isPublished: true }
            })
          }}
        >
          公開する
        </ButtonFill>
      </Container>
    </>
  )
}

export default TriplateEditMemory
