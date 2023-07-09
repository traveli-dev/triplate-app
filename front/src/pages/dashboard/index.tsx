import { Container } from '@/components/Containers'
import { currentUserSelectors } from '@/redux/features'
import { useGetAllMyTriplatesQuery } from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import { formatDate } from '@/utils/dates'

const Index = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)
  const { data, isLoading } = useGetAllMyTriplatesQuery(currentUser.uid)

  return (
    <>
      {' '}
      <Container bgColor="white" isFull>
        {!data || isLoading ? (
          <>LOADING</>
        ) : (
          <>
            {data.map((item) => (
              <>
                <div>{item.id}</div>
                <div>{item.thumbnail}</div>
                <div>{item.title}</div>
                <div>
                  {item.date?.map((date) => (
                    <>{date && formatDate(date)}, </>
                  ))}
                </div>
                <div>
                  {item.tags?.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div>
                  ----------------------------------------------------------------
                </div>
              </>
            ))}
          </>
        )}
      </Container>
    </>
  )
}

export default Index
