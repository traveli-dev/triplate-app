import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  getDoc,
  getDocs, setDoc, Timestamp
} from 'firebase/firestore'
import {db} from '@/lib/firebase'
import {baseFirestoreApi} from '@/redux/services/firestore/baseFirestoreApi'

export type GetTriplinkType = TriplinkType & {
  id: string
}

export type CreateTriplinkType = TriplinkType & {
  createdAt: Timestamp
}

export type TriplinkType = {
  ownerId: string
  title: string
  thumbnail: string
  date: [string, string]
}

export type MyTripType = {
  triplinkId: string
}

export type JoinTripType = {
  triplinkId: string
}

const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyTrips: builder.query<TriplinkType[], string>({
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
            return {...doc.data()}
          })

          /*triplinkIdからtriplinkリストを取得*/
          const data = await Promise.all(
            triplinkIds.map(async ({triplinkId}) => {
              const ref = doc(
                collection(db, 'triplinks'),
                triplinkId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return {...document.data(), id: triplinkId}
            })
          )

          // nullをフィルタリング
          const filteredData = data.filter(
            (item): item is NonNullable<typeof item> => item !== null
          )

          return {data: filteredData}
        } catch (err) {
          // TODO: エラー処理
          return {error: err}
        }
      }
    }),
    getJoinTrips: builder.query<TriplinkType[], string>({
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
            return {...doc.data()}
          })

          /*triplinkIdからtriplinkリストを取得*/
          const data = await Promise.all(
            triplinkIds.map(async ({triplinkId}) => {
              const ref = doc(
                collection(db, 'triplinks'),
                triplinkId
              ) as DocumentReference<Omit<TriplinkType, 'id'>>

              const document = await getDoc(ref)
              if (!document.exists()) return null

              return {...document.data(), id: triplinkId}
            })
          )

          // nullをフィルタリング
          const filteredData = data.filter(
            (item): item is NonNullable<typeof item> => item !== null
          )

          return {data: filteredData}
        } catch (err) {
          // TODO: エラー処理
          return {error: err}
        }
      }
    }),
    createTrip: builder.mutation<string, CreateTriplinkType>({
        queryFn: async (arg) => {
        try {
          const ref = await addDoc(collection(db, 'triplinks'), arg)

          //userディレクトリのmyTripsにtriplinkIdを追加する
          const mytriplinkId : MyTripType = {
            triplinkId: ref.id
          }
          await setDoc(doc(db, 'users',arg.ownerId,'myTrips',mytriplinkId.triplinkId), mytriplinkId)

          //ローカルストレージの処理
          const myTrips = localStorage.getItem('myTrips')
          if (myTrips === null) {
            // localstorageにkey:myListがなかったら
            // 新しくkey:myListのデータを保存
            const defaultList = ref.id
            localStorage.setItem('myTrips', defaultList.toString())
          }
          if (typeof myTrips === 'string') {
            // すでにlocalstorageにkey:myTripsがあったら
            const myTripList = myTrips.split(',')
            myTripList.push(ref.id)
            localStorage.setItem('myTrips', myTripList.toString())
          }

          return {data: ref.id}
        } catch (err) {
          return {error: err}
        }
      },
    })
  }),
  overrideExisting: false
})

export const {useGetMyTripsQuery, useGetJoinTripsQuery, useCreateTripMutation} = triplinksApi
