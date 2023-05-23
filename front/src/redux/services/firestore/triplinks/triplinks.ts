import { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'
import { db } from '@/lib/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore
} from 'firebase/firestore'

export type TriplinkType =     {
  id: string,
  ownerId: string,
  title: string,
  thumbnail: string,
  date:  [string, string],
  ownerName: string,
  ownerIcon: string
}

const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplinksByUser: builder.query<TriplinkType[], void>({
      queryFn: async () => {
        try {
          const snapshot = await getDocs(collection(db, 'triplinks'))
          const ret = snapshot.docs.map((doc) => {
            return { ...doc.data() } as TriplinkType
          })
          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
    }),
    createTriplinksByUser: builder.mutation<string,TriplinkType>({
      queryFn: async (arg) => {
        try {
          const ref = await addDoc(collection(db, 'triplinks'), arg)

          return { data : ref.id }
        } catch (err) {
          return { error: err }
        }
      },
    })
  }),
  overrideExisting: false
})

export const {
  useGetTriplinksByUserQuery,
  useCreateTriplinksByUserMutation,
  } = triplinksApi
