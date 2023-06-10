import { ChangeEvent, useState } from 'react'
import { useUploadImageMutation } from '@/redux/services/storage'
import { getProfilePath } from '@/utils/storage'

type UserData = {
  icon: string | null
  uid: string
}

export const useFormCreateUser = (user: UserData) => {
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation()

  // TODO: create実装時にsetValueに変える（traveli-webの実装と同じ）
  const [url, setUrl] = useState('')

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.currentTarget.files) {
        const file = e.currentTarget.files[0]

        const res = await uploadImage({
          file,
          path: getProfilePath(user.uid)
        })

        if ('error' in res && res.error === 'error') throw Error

        if ('data' in res) {
          setUrl(res.data)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    uploading,
    url,
    handleUploadImage
  }
}
