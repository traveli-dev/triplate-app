import {
  collection,
  CollectionReference,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type FollowingType = {
  userName: string
  userId: string
  icon: string
}

export const followingApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getFollowing: builder.query<FollowingType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(db, 'users', uid, 'following') as CollectionReference<FollowingType>
          const docs = await getDocs(ref)

          const data = docs.docs.map((doc) => ({ ...doc.data() }))

          return { data }
        } catch (error) {
          return { error }
        }
      }
    }),
  }),
  overrideExisting: false
})

export const { useGetFollowingQuery } = followingApi

