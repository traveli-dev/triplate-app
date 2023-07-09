import { currentUserSelectors } from "@/redux/features"
import { useGetFollowersQuery } from "@/redux/services/firestore"
import { useAppSelector } from "@/redux/store"

const Follower = () => {
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  const { data, isLoading } = useGetFollowersQuery(currentUser.uid)
  console.log(data);
  
  return (<>
    {!data || isLoading ? (
      <>LOADING</>
    ) : (
      <>
        {
          data.map((list)=>(
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

export default Follower
