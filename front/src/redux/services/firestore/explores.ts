import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type GetExploreType = ExploreType & {
  id: string
}

export type ExploreType = {
  title: string
  day: string
  keywords: string[]
  thumbnail: string
}

const exploresApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExplores: builder.query<ExploreType[], void>({
      queryFn: async () => {
        try {
          const snapshot = await getDocs(collection(db, 'explores'))

          const ret = snapshot.docs.map((doc) => {
            return { ...doc.data() } as ExploreType
          })

          return { data: ret }
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
