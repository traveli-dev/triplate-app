import {
  collection,
  CollectionReference,
  documentId,
  getDocs,
  query,
  where
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import {
  baseFirestoreApi,
  GetTriplinkType,
  TriplinkType
} from '@/redux/services/firestore'

export type JoinTripType = {
  triplinkId: string
}

const joinTripsApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getJoinTrips: builder.query<GetTriplinkType[], string>({
      queryFn: async (uid) => {
        try {
          /*triplinkIdのリスト取得*/
          const joinTripsRef = collection(
            db,
            'users',
            uid,
            'joinTrips'
          ) as CollectionReference<JoinTripType>
          const joinTripsSnap = await getDocs(joinTripsRef)
          const triplinkIds = joinTripsSnap.docs.map(
            (doc) => doc.data().triplinkId
          )

          /*triplinkIdからtriplinkリストを取得*/
          const triplinksRef = collection(
            db,
            'triplinks'
          ) as CollectionReference<TriplinkType>

          const q = query(triplinksRef, where(documentId(), 'in', triplinkIds))

          const documents = await getDocs(q)
          const data = documents.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))

          return { data }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetJoinTripsQuery } = joinTripsApi
