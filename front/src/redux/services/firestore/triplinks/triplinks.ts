import { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'
import { db } from '@/lib/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore, query, QuerySnapshot, where
} from 'firebase/firestore'
import {useAppSelector} from "@/redux/rootStore";
import {authSelectors} from "@/redux/stores";
import {DocumentData} from "@google-cloud/firestore";

export type TriplinkType =     {
  id: string,
  ownerId: string,
  title: string,
  thumbnail: string,
  date:  [string, string],
  ownerName: string,
  ownerIcon: string
}
/*TODO: 修正：currentId置き換え*/
const currentId = "C5Ja2gXGLeIXTjhWZbDiWUWe8Whd"
const triplinksApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriplinksByUser: builder.query<TriplinkType[], void>({
      queryFn: async (arg) => {
        /*ユーザIDと突き合わせて取得*/
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
    getMyTriplinksByUser: builder.query<TriplinkType[], void>({
      queryFn: async () => {
        /*ユーザIDと突き合わせて取得*/
        try {
          const triplinksRef = collection(db, 'triplinks')
          const triplinksQuery = query(triplinksRef,
            where("ownerId","==",currentId))
          const triplinksSnap = await getDocs(triplinksQuery)

          const ret = triplinksSnap.docs.map((doc) => {
            return { ...doc.data() } as TriplinkType
          })
          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
    }),
  }),
  overrideExisting: false
})

export const {
  useGetTriplinksByUserQuery,
  useGetMyTriplinksByUserQuery,
  } = triplinksApi
