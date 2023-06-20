import { Timestamp, getDoc, doc, DocumentReference } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type GetTriplinkType = TriplinkType & {
  id: string
}

export type CreateTriplinkType = Omit<TriplinkType, 'updatedAt'>

export type TriplinkType = {
  ownerId: string
  title: string
  thumbnail: string
  date: [Timestamp, Timestamp]
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

export const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplink: builder.query<TriplinkType, string>({
      queryFn: async (triplinkId) => {
        try {
          const ref = doc(
            db,
            'triplinks',
            triplinkId
          ) as DocumentReference<TriplinkType>
          const docs = await getDoc(ref)

          return { data: docs.data() }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetTriplinkQuery } = triplinksApi
