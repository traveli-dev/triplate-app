import { useRouter } from 'next/router'
import { FloatingActionButton } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { authSelectors } from '@/redux/features'
import {
  useGetJoinTripsQuery,
  useGetMyTripsQuery
} from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import { styles } from '@/styles/pages/home/index.styles'

const Home = () => {
  const router = useRouter()
  const currentUid = useAppSelector(authSelectors.currentUid)
  const { data: myTripsData, isLoading: myTripsDataIsLoading } =
    useGetMyTripsQuery(currentUid ?? '')
  const { data: joinTripsData, isLoading: joinTripsDataIsLoading } =
    useGetJoinTripsQuery(currentUid ?? '')

  const isLoading =
    !myTripsData ||
    !joinTripsData ||
    myTripsDataIsLoading ||
    joinTripsDataIsLoading

  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        {isLoading ? (
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
