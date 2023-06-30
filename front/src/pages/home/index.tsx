import { useRouter } from 'next/router'
import { FloatingActionButton } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { currentUserSelectors } from '@/redux/features'
import { useGetMyTriplinksQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import { styles } from '@/styles/pages/home/index.styles'

const Home = () => {
  const router = useRouter()
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetMyTriplinksQuery(currentUserData.uid)

  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        {!data || isLoading ? (
          <>LOADING</>
        ) : (
          <TabHome
            favoriteTriplinksData={[]}
            joinTriplinksData={data.joinTrips}
            myTriplinksData={data.myTrips}
          />
        )}

        <FloatingActionButton onClick={() => router.push('/triplink/new')} />
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
