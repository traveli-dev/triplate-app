import { collection, CollectionReference, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type FollowerItemType = {
  userName: string
  userId: string
  thumbnail: string
}

type GetFollowerItemType = FollowerItemType & {
  id: string
}

export const followersApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getFollowers: builder.query<GetFollowerItemType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(
            db,
            'users',
            uid,
            'followers'
          ) as CollectionReference<FollowerItemType>
          const docs = await getDocs(ref)

          const data = docs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

          return { data }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetFollowersQuery } = followersApi
