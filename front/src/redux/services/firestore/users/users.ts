import {
  DocumentReference,
  Timestamp,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type UserType = {
  email: string
  icon: string | null
  name: string
  userId: string
  description: string | null
  links: {
    instagram: string | null
    twitter: string | null
  }
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

type GetUserType = UserType & {
  uid: string
}

type CreateUserType = {
  uid: string
  body: Omit<UserType, 'createdAt' | 'updatedAt'>
}

export type UserUpdateBodyType = Omit<
  UserType,
  'email' | 'updatedAt' | 'createdAt'
>

export const usersApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<GetUserType | null, string>({
      queryFn: async (uid) => {
        try {
          const ref = doc(
            collection(db, 'users'),
            uid
          ) as DocumentReference<UserType>

          const snapshot = await getDoc(ref)

          const isUserExists = snapshot.exists()
          if (!isUserExists) return { data: null }

          const data = { ...snapshot.data(), uid }

          return { data }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['User']
    }),
    createUser: builder.mutation<string, CreateUserType>({
      queryFn: async ({ uid, body }) => {
        try {
          const batch = writeBatch(db)

          // user情報を登録
          const docRef = doc(db, 'users', uid)
          batch.set(docRef, {
            ...body,
            createdAt: serverTimestamp()
          })

          // uniqueなフィールドをindexに登録
          const indexUserIdRef = doc(
            db,
            'index',
            'users',
            'userId',
            body.userId
          )
          batch.set(indexUserIdRef, {
            user: uid
          })
          const indexEmailRef = doc(db, 'index', 'users', 'email', body.email)
          batch.set(indexEmailRef, {
            user: uid
          })

          await batch.commit()

          return {
            data: 'OK'
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: (_result, error) => (error ? [] : ['User'])
    })
  }),
  overrideExisting: false
})

export const { useGetUserQuery, useCreateUserMutation } = usersApi
