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

// users/myTriplinks
export {
  useGetMyTriplinksQuery,
  useGetMyTriplinksWithTriplateUncreatedQuery,
  type MyTriplinksType
} from '@/redux/services/firestore/users/myTriplinks'

// triplinks
export {
  triplinksApi,
  useGetTriplinkQuery,
  type TriplinkType,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'

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
