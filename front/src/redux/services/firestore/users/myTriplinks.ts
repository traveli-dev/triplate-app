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

export type MyTriplinksType = {
  isAuthor: boolean
  triplateId: string | null
}

type FormatedTriplinksType = {
  [triplinkId: string]: GetTriplinkType
}

export type GetMyTriplinksType = {
  myTrips: GetTriplinkType[]
  joinTrips: GetTriplinkType[]
}

const myTriplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyTriplinks: builder.query<GetMyTriplinksType, string>({
      queryFn: async (uid) => {
        try {
          // users/myTriplinksコレクションから，自分が参加or作成したtriplinkのidを配列で取得
          const myTriplinksRef = collection(
            db,
            'users',
            uid,
            'myTriplinks'
          ) as CollectionReference<MyTriplinksType>
          const myTriplinksDocs = await getDocs(myTriplinksRef)
          const triplinkIds = myTriplinksDocs.docs.map((doc) => doc.id)

          if (triplinkIds.length === 0) return {}

          // triplinksコレクションから，自分が参加or作成したtriplinkを配列で取得し，idをキーとするオブジェクトに変換
          const triplinksRef = collection(
            db,
            'triplinks'
          ) as CollectionReference<TriplinkType>
          const triplinksQuery = query(
            triplinksRef,
            where(documentId(), 'in', triplinkIds)
          )
          const triplinksDocs = await getDocs(triplinksQuery)
          const triplinksData = triplinksDocs.docs.reduce(
            (formatedTriplinks: FormatedTriplinksType, doc) => {
              formatedTriplinks[doc.id] = { ...doc.data(), id: doc.id }
              return formatedTriplinks
            },
            {}
          )

          // isAuthorがtrueだったらmyTripsに，falseだったらjoinTripsとして返り値を作成
          const data = myTriplinksDocs.docs.reduce(
            (myTriplinks: GetMyTriplinksType, doc) => {
              const isAuthor = doc.data().isAuthor
              const triplinkData = triplinksData[doc.id]
              isAuthor
                ? myTriplinks.myTrips.push(triplinkData)
                : myTriplinks.joinTrips.push(triplinkData)
              return myTriplinks
            },
            { myTrips: [], joinTrips: [] }
          )

          return { data }
        } catch (err) {
          return { error: err }
        }
      }
    }),
    getMyTriplinksWithTriplateUncreated: builder.query<
      GetTriplinkType[],
      string
    >({
      queryFn: async (uid) => {
        try {
          // users/myTriplinksコレクションから，自分が参加or作成したtriplinkのなかでまだtriplateが作成されていないものを配列で取得
          const myTriplinksRef = collection(
            db,
            'users',
            uid,
            'myTriplinks'
          ) as CollectionReference<MyTriplinksType>
          const triplateUncreatedDocs = await getDocs(
            query(myTriplinksRef, where('triplateId', '==', null))
          )
          const triplinkIds = triplateUncreatedDocs.docs.map((doc) => doc.id)

          if (triplinkIds.length === 0) return {}

          // triplinksコレクションから，自分が参加or作成したtriplinkを配列で取得し，idをキーとするオブジェクトに変換
          const triplinksRef = collection(
            db,
            'triplinks'
          ) as CollectionReference<TriplinkType>
          const triplinksQuery = query(
            triplinksRef,
            where(documentId(), 'in', triplinkIds)
          )
          const triplinksDocs = await getDocs(triplinksQuery)
          const triplinksData = triplinksDocs.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))

          return { data: triplinksData }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const {
  useGetMyTriplinksQuery,
  useGetMyTriplinksWithTriplateUncreatedQuery
} = myTriplinksApi
