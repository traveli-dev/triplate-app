import { DocumentReference, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type IndexType = {
  user: string
}

export const indexesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    checkUniqueUserId: builder.query<boolean, string>({
      queryFn: async (userId) => {
        try {
          const ref = doc(
            collection(db, 'indexes', 'users', 'userId'),
            userId
          ) as DocumentReference<IndexType>

          const snapshot = await getDoc(ref)

          const isUnique = !snapshot.exists()

          return { data: isUnique }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useCheckUniqueUserIdQuery } = indexesApi
