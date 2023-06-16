export { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'

// users
export {
  usersApi,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  type UserType,
  type UserRequestBodyType
} from '@/redux/services/firestore/users/users'

// triplinks
export {
  type TriplinkType,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'

// triplinks/getTrips
export { useGetMyTripsQuery } from '@/redux/services/firestore/users/myTrips'

// triplinks/joinTrips
export { useGetJoinTripsQuery } from '@/redux/services/firestore/users/joinTrips'

//triplates
export {
  useGetTriplateQuery,
  useCreateTriplateMutation,
  useUpdateTriplateMutation,
  type TriplateMemoryType,
  type TriplateType
} from '@/redux/services/firestore/triplates/triplates'

// indexes
export { useCheckUniqueUserIdQuery } from '@/redux/services/firestore/indexes/indexes'
