import { FirebaseError } from 'firebase/app'
import {
  collection,
  getDocs,
  CollectionReference,
  doc,
  serverTimestamp,
  setDoc,
  DocumentReference,
  getDoc
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type TriplateMemoryType = {
  title: string
  day: string
  thumbnail: string
  keywords: string[]
}

export type TriplateSettingsType = {
  triplinkId: string
  description: string | undefined
  tags: string
  privacySettings: {
    isMemoPublic: boolean
    isTimePublic: boolean
    isItineraryPublic: boolean
  }
}

type CreateTriplateSettingsType = {
  id: string
  body: TriplateSettingsType
}

const triplatesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTriplates: builder.query<TriplateMemoryType[], void>({
      queryFn: async () => {
        try {
          const ref = collection(
            db,
            'triplates'
          ) as CollectionReference<TriplateMemoryType>
          const snapshot = await getDocs(ref)
          const data = snapshot.docs.map((doc) => {
            return { ...doc.data() }
          })

          return { data }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      }
    }),
    getTriplateSettings: builder.query<TriplateSettingsType | null, string>({
      queryFn: async (triplateId) => {
        try {
          const ref = doc(
            collection(db, 'triplates'),
            triplateId
          ) as DocumentReference<TriplateSettingsType>
          const snapshot = await getDoc(ref)

          const triplateExists = snapshot.exists()

          if (!triplateExists) return { data: null }

          return { data: snapshot.data() }
        } catch (err) {
          // TODO: エラー処理
          return { error: err }
        }
      }
    }),
    createTriplateSettings: builder.mutation<
      string,
      CreateTriplateSettingsType
    >({
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
      }
    })
  }),
  overrideExisting: false
})
export const {
  useGetAllTriplatesQuery,
  useGetTriplateSettingsQuery,
  useCreateTriplateSettingsMutation
} = triplatesApi
