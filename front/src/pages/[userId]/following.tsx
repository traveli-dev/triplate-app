import { Container } from '@/components/Containers'
import { currentUserSelectors } from '@/redux/features'
import { useGetFollowingQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'

const Following = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetFollowingQuery(currentUser.uid)

  return (
    <>
      {' '}
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
    </>
  )
}

export default Following
