import {
  DocumentReference,
  Timestamp,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc
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
          await setDoc(doc(db, 'users', uid), {
            ...body,
            createdAt: serverTimestamp()
          })

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
