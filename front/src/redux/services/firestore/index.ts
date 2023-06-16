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
  useGetTriplinkQuery,
  useGetJoinTripsQuery,
  useGetMyTripsQuery,
  type GetTriplinkType,
  type CreateTriplinkType
} from '@/redux/services/firestore/triplinks/triplinks'

//triplates
export {
  useGetAllTriplatesQuery,
  useGetTriplateSettingsQuery,
  useCreateTriplateSettingsMutation,
  useUpdateTriplateSettingsMutation,
  type TriplateMemoryType,
  type TriplateSettingsType
} from '@/redux/services/firestore/triplates/triplates'

// indexes
export { useCheckUniqueUserIdQuery } from '@/redux/services/firestore/indexes/indexes'
