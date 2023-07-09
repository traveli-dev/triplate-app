import {
  collection,
  Timestamp,
  CollectionReference,
  getDocs,

} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type MyTriplatesItemType = {
  thumbnail:string,
  title:string,
  date: [Timestamp, Timestamp],
  tags:string[],
  isPublished:boolean
}

export type GetMyTriplatesItemType = MyTriplatesItemType & {
  id: string
}


const triplatesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMyTriplates: builder.query<GetMyTriplatesItemType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(
            db,
            'users', uid, 'myTriplates'
          ) as CollectionReference<MyTriplatesItemType>
          const docs = await getDocs(ref)
          const data = docs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))


          return { data }
        } catch (error) {
          return { error }
        }
      },
    }),
    getMyPublishedTriplates: builder.query<GetMyTriplatesItemType[], string>({
      queryFn: async (uid) => {
        try {
          const ref = collection(
            db,
            'users', uid, 'myTriplates'
          ) as CollectionReference<MyTriplatesItemType>
          const docs = await getDocs(ref)
          const data = docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(item =>
            item.isPublished
          )

          return { data }
        } catch (error) {
          return { error }
        }
      },
    }),
  }),
  overrideExisting: false
})
export const {
  useGetAllMyTriplatesQuery,
  useGetMyPublishedTriplatesQuery
} = triplatesApi
