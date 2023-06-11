import { collection, getDocs, CollectionReference } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type GetExploreType = ExploreType & {
  id: string
}

export type ExploreType = {
  title: string
  day: string
  thumbnail: string
  keywords: string[]
}

const exploresApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExplores: builder.query<ExploreType[], void>({
      queryFn: async () => {
        try {
          const ref = collection(db, 'explores') as CollectionReference<ExploreType>
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
export const { useGetAllExploresQuery } = exploresApi
