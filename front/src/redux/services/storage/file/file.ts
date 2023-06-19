import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { baseStorageApi } from '@/redux/services/storage'

type UploadFileRequestType = {
  path: string
  file: File
}

const fileApi = baseStorageApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<string, UploadFileRequestType>({
      queryFn: async ({ file, path }) => {
        try {
          const imageRef = ref(storage, path)

          await uploadBytes(imageRef, file)
          const url = await getDownloadURL(imageRef)

          return { data: url }
        } catch (error) {
          // TODO: エラー処理
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useUploadImageMutation } = fileApi
