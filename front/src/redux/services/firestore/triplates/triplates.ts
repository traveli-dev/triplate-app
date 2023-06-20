import { FirebaseError } from 'firebase/app'
import {
  collection,
  doc,
  serverTimestamp,
  DocumentReference,
  getDoc,
  updateDoc,
  Timestamp,
  runTransaction,
  CollectionReference,
  query,
  where,
  getDocs
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { MyTriplinksType, baseFirestoreApi } from '@/redux/services/firestore'

export type TriplateType = {
  triplinkId: string
  ownerId: string
  title: string
  thumbnail: string
  date: [Timestamp, Timestamp]
  description: string | null
  tags: string[] | null
  isPublished: boolean
  privacySettings: {
    isMemoPublic: boolean
    isTimePublic: boolean
    isItineraryPublic: boolean
  }
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

export type GetTriplateType = TriplateType & {
  id: string
}

type TriplateCreateRequestType = {
  id: string
  uid: string
  body: TriplateType
}

type TriplateUpdateRequestType = {
  id: string
  body: Partial<TriplateType>
}

type GetTriplateRequestType = {
  uid?: string
  triplateId: string
}

const triplatesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplate: builder.query<TriplateType | null, GetTriplateRequestType>({
      queryFn: async ({ triplateId, uid }) => {
        try {
          const ref = doc(
            collection(db, 'triplates'),
            triplateId
          ) as DocumentReference<TriplateType>
          const document = await getDoc(ref)

          const triplateExists = document.exists()
          if (!triplateExists) return { data: null }

          const data = document.data()

          // editページの時はuidがownerIdと一致しない場合403
          if (!!uid && uid !== data.ownerId) {
            throw new FirebaseError(
              'permission-denied',
              'その操作は許可されていません'
            )
          }

          return { data }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Triplate']
    }),
    getAllPublishedTriplates: builder.query<GetTriplateType[], void>({
      queryFn: async () => {
        try {
          const ref = collection(
            db,
            'triplates'
          ) as CollectionReference<TriplateType>
          const q = query(ref, where('isPublished', '==', true))
          const docs = await getDocs(q)

          const data = docs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

          return { data }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Triplate']
    }),
    createTriplate: builder.mutation<string, TriplateCreateRequestType>({
      queryFn: async ({ id, uid, body }) => {
        try {
          const triplateRef = doc(
            collection(db, 'triplates'),
            id
          ) as DocumentReference<TriplateType>
          const myTripsRef = doc(
            collection(db, 'users', uid, 'myTriplinks'),
            body.triplinkId
          ) as DocumentReference<MyTriplinksType>
          const myTriplatesRef = doc(
            collection(db, 'users', uid, 'myTriplates'),
            id
          )

          // myTripsにtriplateIdを紐付け
          await runTransaction(db, async (transaction) => {
            transaction.set(triplateRef, {
              ...body,
              ownerId: uid,
              createdAt: serverTimestamp()
            })
            transaction.update(myTripsRef, {
              triplateId: id
            })
            transaction.set(myTriplatesRef, {
              triplateId: id
            })
          })

          return {
            data: 'OK'
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: (_result, error) => (error ? [] : ['Triplate'])
    }),
    updateTriplate: builder.mutation<string, TriplateUpdateRequestType>({
      queryFn: async ({ id, body }) => {
        try {
          const ref = doc(collection(db, 'triplates'), id)

          await updateDoc(ref, {
            ...body,
            updatedAt: serverTimestamp()
          })

          return {
            data: 'OK'
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: (_result, error) => (error ? [] : ['Triplate'])
    })
  }),
  overrideExisting: false
})
export const {
  useGetTriplateQuery,
  useCreateTriplateMutation,
  useUpdateTriplateMutation,
  useGetAllPublishedTriplatesQuery
} = triplatesApi
