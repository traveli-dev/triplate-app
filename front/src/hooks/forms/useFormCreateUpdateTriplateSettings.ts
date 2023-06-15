import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import yup from '@/config/yup.config'

type TriplateSettingsType = {
  triplinkId: string
  description: string | undefined
  tags: string
  privacySettings: {
    isMemoPublic: boolean
    isTimePublic: boolean
    isItineraryPublic: boolean
  }
}

const triplateId = uuidv4()

export const useFormCreateUpdateTriplateSettings = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<TriplateSettingsType>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      triplinkId: '',
      description: '',
      tags: '',
      privacySettings: {
        isMemoPublic: false,
        isTimePublic: false,
        isItineraryPublic: false
      }
    }
  })

  // onsubmit後にisdirtyをfalseにする
  // https://github.com/react-hook-form/react-hook-form/issues/3097
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({}, { keepValues: true })
    }
  }, [isSubmitSuccessful])

  const onSubmit: SubmitHandler<TriplateSettingsType> = async (data) => {
    try {
      console.warn(data)
      router.push(`/triplate/${triplateId}/edit/memory`)
    } catch (e) {
      // TODO: errorハンドリング
      console.error(e)
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isDirty,
    isValid,
    isSubmitting
  }
}

const schema = yup.object({
  triplinkId: yup.string().required('テンプレートにするたびは必須です'),
  tags: yup.string(),
  description: yup
    .string()
    .maxLength(150, 'たびの説明')
    .nullable()
    .convertToNull(),
  privacySettings: yup.object().shape({
    isMemoPublic: yup.boolean().required('ひとことメモの公開設定は必須です'),
    isTimePublic: yup.boolean().required('ひとことメモの公開設定は必須です'),
    isItineraryPublic: yup
      .boolean()
      .required('ひとことメモの公開設定は必須です')
  })
})
