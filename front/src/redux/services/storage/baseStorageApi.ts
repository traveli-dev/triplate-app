import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

// firebase cloud storage用
export const baseStorageApi = createApi({
  reducerPath: 'baseStorageApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: [],
  endpoints: () => ({})
})
