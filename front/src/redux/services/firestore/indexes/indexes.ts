import { DocumentReference, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

type IndexCollectionType = {
  user: string
}

export const indexesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    checkUniqueUserId: builder.query<boolean, string>({
      queryFn: async (userId) => {
        try {
          // 予約されている名前は使用不可
          const reservedWords = [
            'explore',
            'home',
            'settings',
            'help',
            'notifications',
            'settings',
            'auth',
            'reader',
            'support',
            'privacy',
            '_app',
            '_document'
          ]
          if (reservedWords.includes(userId)) return { data: false }

          const ref = doc(
            collection(db, 'indexes', 'users', 'userId'),
            userId
          ) as DocumentReference<IndexCollectionType>

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
