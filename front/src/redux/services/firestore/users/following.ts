import { collection, CollectionReference, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type FollowingItemType = {
  userName: string
  userId: string
  thumbnail: string
}

type GetFollowingItemType = FollowingItemType & {
  id: string
}

export const followingApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getFollowing: builder.query<GetFollowingItemType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(
            db,
            'users',
            uid,
            'following'
          ) as CollectionReference<FollowingItemType>
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

export const { useGetFollowingQuery } = followingApi
