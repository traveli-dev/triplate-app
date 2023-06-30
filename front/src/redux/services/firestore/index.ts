export { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'

// users
export {
  usersApi,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  type UserCollectionType,
  type UserRequestBodyType
} from '@/redux/services/firestore/users/users'

// users/myTriplinks
export {
  useGetMyTriplinksQuery,
  useGetMyTriplinksWithTriplateUncreatedQuery,
  type MyTriplinksCollectionType
} from '@/redux/services/firestore/users/myTriplinks'

// triplinks
export {
  triplinksApi,
  useGetTriplinkQuery,
  type TriplinkCollectionType,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'

//triplates
export {
  useGetTriplateQuery,
  useCreateTriplateMutation,
  useUpdateTriplateMutation,
  useGetAllPublishedTriplatesQuery,
  type TriplateCollectionType,
  type GetTriplateType
} from '@/redux/services/firestore/triplates/triplates'

// indexes
export { useCheckUniqueUserIdQuery } from '@/redux/services/firestore/indexes/indexes'
