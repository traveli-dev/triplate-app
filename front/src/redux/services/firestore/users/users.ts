import {
  DocumentReference,
  Timestamp,
  collection,
  doc,
  getDoc,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
  CollectionReference,
  getDocs,

} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { baseFirestoreApi } from '@/redux/services/firestore'
import { FirebaseError } from 'firebase/app'

export type UserType = {
  icon: string
  name: string
  userId: string
  description: string | null
  followCount: number
  followerCount: number
  notificationCount: number
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
  body: Omit<UserRequestBodyType, 'updatedAt'>
}

type UpdateUserType = {
  uid: string
  body: Omit<UserRequestBodyType, 'createdAt'>
}

export type UserRequestBodyType = Omit<
  UserType,
  'followCount' | 'followerCount' | 'notificationCount'
>

export const usersApi = baseFirestoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserByUid: builder.query<GetUserType | null, string>({
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
    getUserByUserId: builder.query<GetUserType, string>({
      queryFn: async (userId) => {
        try {
          const ref = collection(db, 'users') as CollectionReference<UserType>
          
          const q = query(ref, where('userId', '==', userId))

          const snapshot = await getDocs(q)

          const data = snapshot.docs.map((doc)=> ({...doc.data(), uid: doc.id}))
          console.log(data)
          
          if (data.length === 0) {
            throw new FirebaseError(
              'not-found',
              'このページはすでに削除されているか、URLが間違っている可能性があります。'
            )
          }

          return { data:data[0] }
  } catch(error) {
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
    } catch (error) {
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
      } catch (error) {
        return { error }
      }
    },
    invalidatesTags: (_result, error) => (error ? [] : ['User'])
  })
  }),
overrideExisting: false
})

export const { useGetUserByUidQuery, useGetUserByUserIdQuery, useCreateUserMutation, useUpdateUserMutation } =
  usersApi
