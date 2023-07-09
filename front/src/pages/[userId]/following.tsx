import { currentUserSelectors } from "@/redux/features"
import { useGetFollowingQuery } from "@/redux/services/firestore"
import { useAppSelector } from "@/redux/store"

const Following = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetFollowingQuery(currentUser.uid)
  console.log(data);

  return (<>
    {!data || isLoading ? (
      <>LOADING</>
    ) : (
      <>
        {
          data.map((list) => (
            <>
              <div>{list.icon}</div>
              <div>{list.userName}</div>
              <div>{list.userId}</div>
            </>
          ))
        }
      </>)}
  </>)
}

export default Following
