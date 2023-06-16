import { FirebaseError } from 'firebase/app'
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  DocumentReference,
  getDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type TriplateMemoryType = {
  title: string
  day: string
  thumbnail: string
  keywords: string[]
}

export type TriplateType = {
  triplinkId: string
  description: string | null
  tags: string[]
  isPublished: boolean
  privacySettings: {
    isMemoPublic: boolean
    isTimePublic: boolean
    isItineraryPublic: boolean
  }
}

type TriplateRequestType = {
  id: string
  body: TriplateType
}

const triplatesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplate: builder.query<TriplateType | null, string>({
      queryFn: async (triplateId) => {
        try {
          const ref = doc(
            collection(db, 'triplates'),
            triplateId
          ) as DocumentReference<TriplateType>
          const snapshot = await getDoc(ref)

          const triplateExists = snapshot.exists()

          if (!triplateExists) return { data: null }

          return { data: snapshot.data() }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      },
      providesTags: ['Triplate']
    }),
    createTriplate: builder.mutation<string, TriplateRequestType>({
      queryFn: async ({ id, body }) => {
        try {
          const ref = doc(collection(db, 'triplates'), id)

          await setDoc(ref, {
            ...body,
            createdAt: serverTimestamp()
          })

          return {
            data: 'OK'
          }
        } catch (err) {
          let error

          if (err instanceof FirebaseError) {
            error = {
              code: err.code
            }
          } else {
            error = {
              code: 'unexpected-error'
            }
          }
          return { error }
        }
      },
      invalidatesTags: (_result, error) => (error ? [] : ['Triplate'])
    }),
    updateTriplate: builder.mutation<string, TriplateRequestType>({
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
        } catch (err) {
          let error

          if (err instanceof FirebaseError) {
            error = {
              code: err.code
            }
          } else {
            error = {
              code: 'unexpected-error'
            }
          }
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
  useUpdateTriplateMutation
} = triplatesApi
