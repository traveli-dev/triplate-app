import { FirebaseError } from 'firebase/app'
import { Timestamp, getDoc, doc, DocumentReference } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type GetTriplinkType = TriplinkCollectionType & {
  id: string
}

export type CreateTriplinkType = Omit<TriplinkCollectionType, 'updatedAt'>

export type TriplinkCollectionType = {
  ownerId: string
  title: string
  thumbnail: string
  date: [Timestamp, Timestamp | null]
  members: string[]
  tabimemo: {
    budget: number | null
    items: string[]
    memo: string | null
  }
  itineraries: {
    [key: `day${number}`]: {
      id: number
      isSecret: boolean
      url: string | null
      name: string
      time: Timestamp | null
      memo: string | null
    }
  }
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

export const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplink: builder.query<GetTriplinkType, string>({
      queryFn: async (triplinkId) => {
        try {
          const ref = doc(
            db,
            'triplinks',
            triplinkId
          ) as DocumentReference<TriplinkCollectionType>
          const docs = await getDoc(ref)

          if (!docs.exists()) {
            throw new FirebaseError(
              'not-found',
              'このページはすでに削除されているか、URLが間違っている可能性があります。'
            )
          }

          const data = {
            ...docs.data(),
            id: docs.id
          }

          return { data }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetTriplinkQuery } = triplinksApi
