import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  // Timestamp
} from 'firebase/firestore'
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
  date: [string, string]
  // TODO: post処理作るときに考える
  // createdAt: Timestamp
  // updatedAt: Timestamp | null
}

export type MyTripType = {
  triplinkId: string
}

export type JoinTripType = {
  triplinkId: string
}

const triplinksApi = baseFirestoreApi.injectEndpoints({
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
          const triplinkIds = myTripsSnap.docs.map((doc) => {
            return { ...doc.data() }
          })

          /*triplinkIdからtriplinkリストを取得*/
          const data = await Promise.all(
            triplinkIds.map(async ({ triplinkId }) => {
              const ref = doc(
                collection(db, 'triplinks'),
                triplinkId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return { ...document.data(), id: triplinkId }
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
          const triplinkIds = joinTripsSnap.docs.map((doc) => {
            return { ...doc.data() }
          })

          /*triplinkIdからtriplinkリストを取得*/
          const data = await Promise.all(
            triplinkIds.map(async ({ triplinkId }) => {
              const ref = doc(
                collection(db, 'triplinks'),
                triplinkId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return { ...document.data(), id: triplinkId }
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
