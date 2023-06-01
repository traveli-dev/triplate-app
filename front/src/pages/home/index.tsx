import { useRouter } from 'next/router'
import { FloatingActionButton } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { useAppSelector } from '@/redux/rootStore'
import {
  useGetJoinTripsQuery,
  useGetMyTripsQuery
} from '@/redux/services/firestore/triplinks/triplinks'
import { authSelectors } from '@/redux/stores'
import { styles } from '@/styles/pages/home/index.styles'

const Home = () => {
  const router = useRouter()
  const currentUid = useAppSelector(authSelectors.currentUid)
  const { data: myTripsData, isLoading: myTripsDataisLoading } =
    useGetMyTripsQuery(currentUid ?? '')
  const { data: joinTripsData, isLoading: joinTripsDataisLoading } =
    useGetJoinTripsQuery(currentUid ?? '')

  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        {!myTripsData ||
        !joinTripsData ||
        myTripsDataisLoading ||
        joinTripsDataisLoading ? (
          <>LOADING</>
        ) : (
          <TabHome
            favoriteTriplinksData={[]}
            joinTriplinksData={joinTripsData}
            myTriplinksData={myTripsData}
          />
        )}

        <FloatingActionButton onClick={() => router.push('/triplink/new')} />
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
