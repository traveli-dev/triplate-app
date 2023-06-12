import { collection, getDocs, CollectionReference } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type TriplateType = {
  title: string
  day: string
  thumbnail: string
  keywords: string[]
}

const triplatesApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTriplates: builder.query<TriplateType[], void>({
      queryFn: async () => {
        try {
          const ref = collection(
            db,
            'triplates'
          ) as CollectionReference<TriplateType>
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
    })
  }),
  overrideExisting: false
})
export const { useGetAllTriplatesQuery } = triplatesApi
