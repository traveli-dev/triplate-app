import { useRouter } from 'next/router'
import { Container } from '@/components/Containers'
import { FormUpdateUser } from '@/components/Forms'
import { Header } from '@/components/Headers'
import { currentUserSelectors } from '@/redux/features'
import { useGetUserByUidQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'

const SettingsProfile = () => {
  const router = useRouter()
  const { prev } = router.query
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)
  const { data, isLoading } = useGetUserByUidQuery(currentUserData.uid)

  return (
    <>
      <Header href={prev ? `/${prev}` : '/settings'} title="プロフィール編集" />
      <Container bgColor="white" isFull>
        {!data || isLoading ? (
          <>ローディング</>
        ) : (
          <FormUpdateUser
            authUser={{
              icon: currentUserData.icon,
              uid: currentUserData.uid
            }}
            data={data}
          />
        )}
      </Container>
    </>
  )
}

export default SettingsProfile
