export { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'

// users
export {
  usersApi,
  useGetUserQuery,
  useCreateUserMutation,
  type UserType
} from '@/redux/services/firestore/users/users'

// triplinks
export {
  useGetJoinTripsQuery,
  useGetMyTripsQuery,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'
