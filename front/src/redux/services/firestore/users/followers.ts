import {
  collection,
  CollectionReference,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type FollowerType = {
  userName: string
  userId: string
  icon: string
}

export const followersApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getFollowers: builder.query<FollowerType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(db,'users',uid,'followers') as CollectionReference<FollowerType>
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

export const { useGetFollowersQuery } = followersApi

