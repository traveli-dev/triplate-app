import { currentUserSelectors } from "@/redux/features"
import { useGetAllMyTriplatesQuery, useGetMyPublishedTriplatesQuery } from "@/redux/services/firestore"
import { useAppSelector } from "@/redux/store"
import { formatDate } from "@/utils/dates"

const Index = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)
  /* TODO: 最後治す */
  const { data, isLoading } = useGetAllMyTriplatesQuery(currentUser.uid)

  return (<>
    {!data || isLoading ? (
      <>LOADING</>
    ) : (
      <>
      <h2>myTriplates</h2>
        {
            data.map((item) => (
            <>
              <div>{item.id}</div>
              <div>{item.thumbnail}</div>
              <div>{item.title}</div>
              <div>{
                item.date?.map((date) => (
                  <>
                    {date &&
                      formatDate(date)
                    }, </>
                ))
              }</div>
              <div>{item.tags?.map((tag) => (<><span>{tag}</span></>))}</div>
              <div>----------------------------------------------------------------</div>
            </>
          ))
        }
      </>)}
  </>)
}

export default Index
