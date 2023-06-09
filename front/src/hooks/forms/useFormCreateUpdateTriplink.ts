import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useUploadImageMutation } from '@/redux/services/storage'
import { getTriplinkPath } from '@/utils/storage'

// triplinkIdを事前に生成
const triplinkId = uuidv4()

export const useFormCreateUpdateTriplink = () => {
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation()

  // TODO: create実装時にsetValueに変える（traveli-webの実装と同じ）
  const [url, setUrl] = useState('')

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.currentTarget.files) {
        const file = e.currentTarget.files[0]

        const res = await uploadImage({
          file,
          path: getTriplinkPath(triplinkId)
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
    triplinkId,
    uploading,
    url,
    handleUploadImage
  }
}
