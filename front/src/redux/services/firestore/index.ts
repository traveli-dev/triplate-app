export { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'

// users
export {
  usersApi,
  useGetUserQuery,
  useCreateUserMutation,
  type UserType,
  type UserUpdateBodyType
} from '@/redux/services/firestore/users/users'

// triplinks
export {
  useGetJoinTripsQuery,
  useGetMyTripsQuery,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'

// indexes
export { useCheckUniqueUserIdQuery } from '@/redux/services/firestore/indexes/indexes'
