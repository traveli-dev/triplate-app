import { Container } from '@/components/Containers'
import { currentUserSelectors } from '@/redux/features'
import { useGetFollowersQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'

const Follower = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetFollowersQuery(currentUser.uid)

  return (
    <Container bgColor="white" isFull>
      {!data || isLoading ? (
        <>LOADING</>
      ) : (
        <>
          {data.map((list) => (
            <>
              <div>{list.thumbnail}</div>
              <div>{list.userName}</div>
              <div>{list.userId}</div>
            </>
          ))}
        </>
      )}
    </Container>
  )
}

export default Follower
