import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

// firebase javascript sdk 用
export const baseFirestoreApi = createApi({
  reducerPath: 'baseFirestoreApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User', 'Triplate'],
  endpoints: () => ({})
})
