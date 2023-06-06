import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type TriplinkType = {
  id: string
  ownerId: string
  title: string
  thumbnail: string
  date: [string, string]
}

export type MyTripType = {
  tripId: string
}

export type JoinTripType = {
  tripId: string
}

const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyTrips: builder.query<TriplinkType[], string>({
      queryFn: async (uid) => {
        try {
          /*tripIdのリスト取得*/
          const myTripsRef = collection(
            db,
            'users',
            uid,
            'myTrips'
          ) as CollectionReference<MyTripType>
          const myTripsSnap = await getDocs(myTripsRef)
          const tripIds = myTripsSnap.docs.map((doc) => {
            return { ...doc.data() }
          })

          /*tripIdからtriplinkリストを取得*/
          const data = await Promise.all(
            tripIds.map(async ({ tripId }) => {
              const ref = doc(
                collection(db, 'triplinks'),
                tripId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return { ...document.data(), id: tripId }
            })
          )

          // nullをフィルタリング
          const filteredData = data.filter(
            (item): item is NonNullable<typeof item> => item !== null
          )

          return { data: filteredData }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      }
    }),
    getJoinTrips: builder.query<TriplinkType[], string>({
      queryFn: async (uid) => {
        try {
          /*tripIdのリスト取得*/
          const joinTripsRef = collection(
            db,
            'users',
            uid,
            'joinTrips'
          ) as CollectionReference<JoinTripType>
          const joinTripsSnap = await getDocs(joinTripsRef)
          const tripIds = joinTripsSnap.docs.map((doc) => {
            return { ...doc.data() }
          })

          /*tripIdからtriplinkリストを取得*/
          const data = await Promise.all(
            tripIds.map(async ({ tripId }) => {
              const ref = doc(
                collection(db, 'triplinks'),
                tripId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return { ...document.data(), id: tripId }
            })
          )

          // nullをフィルタリング
          const filteredData = data.filter(
            (item): item is NonNullable<typeof item> => item !== null
          )

          return { data: filteredData }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetMyTripsQuery, useGetJoinTripsQuery } = triplinksApi
