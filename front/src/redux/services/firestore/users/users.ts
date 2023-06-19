import { FirebaseError } from 'firebase/app'
import {
  DocumentReference,
  Timestamp,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  writeBatch
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'

export type UserType = {
  icon: string
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
  body: UserRequestBodyType
}

type UpdateUserType = {
  uid: string
  body: UserRequestBodyType
}

export type UserRequestBodyType = Omit<UserType, 'updatedAt' | 'createdAt'>

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
            'indexes',
            'users',
            'userId',
            body.userId
          )
          batch.set(indexUserIdRef, {
            user: uid
          })

          await batch.commit()

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
      invalidatesTags: (_result, error) => (error ? [] : ['User'])
    }),
    updateUser: builder.mutation<string, UpdateUserType>({
      queryFn: async ({ uid, body }) => {
        try {
          const ref = doc(collection(db, 'users'), uid)

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
      invalidatesTags: (_result, error) => (error ? [] : ['User'])
    })
  }),
  overrideExisting: false
})

export const { useGetUserQuery, useCreateUserMutation, useUpdateUserMutation } =
  usersApi
