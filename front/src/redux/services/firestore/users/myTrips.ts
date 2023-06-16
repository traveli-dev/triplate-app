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

export type MyTripType = {
  triplinkId: string
}

const myTripsApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyTrips: builder.query<GetTriplinkType[], string>({
      queryFn: async (uid) => {
        try {
          /*triplinkIdのリスト取得*/
          const myTripsRef = collection(
            db,
            'users',
            uid,
            'myTrips'
          ) as CollectionReference<MyTripType>
          const myTripsSnap = await getDocs(myTripsRef)
          const triplinkIds = myTripsSnap.docs.map(
            (doc) => doc.data().triplinkId
          )

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

export const { useGetMyTripsQuery } = myTripsApi
