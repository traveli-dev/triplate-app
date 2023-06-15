import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import yup from '@/config/yup.config'
import {
  TriplateSettingsType,
  useCreateTriplateSettingsMutation,
  useUpdateTriplateSettingsMutation
} from '@/redux/services/firestore'

const triplateId = uuidv4()

export const useFormCreateUpdateTriplateSettings = (
  triplateSettingsData?: TriplateSettingsType
) => {
  const router = useRouter()
  const [createTriplateSettings] = useCreateTriplateSettingsMutation()
  const [updateTriplateSettings] = useUpdateTriplateSettingsMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<TriplateSettingsType>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      triplinkId: triplateSettingsData?.triplinkId ?? '',
      description: triplateSettingsData?.description ?? '',
      tags: triplateSettingsData?.tags ?? '',
      privacySettings: {
        isMemoPublic:
          triplateSettingsData?.privacySettings.isMemoPublic ?? false,
        isTimePublic:
          triplateSettingsData?.privacySettings.isTimePublic ?? false,
        isItineraryPublic:
          triplateSettingsData?.privacySettings.isItineraryPublic ?? false
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
      triplateSettingsData ? await update(data) : await create(data)
    } catch (e) {
      // TODO: errorハンドリング
      console.error(e)
    }
  }

  const create = async (data: TriplateSettingsType) => {
    await createTriplateSettings({
      id: triplateId,
      body: { ...data, isPublished: false }
    }).unwrap()
    router.push(`/triplate/${triplateId}/edit/memory`)
  }

  const update = async (data: TriplateSettingsType) => {
    await updateTriplateSettings({
      id: triplateId,
      body: data
    })
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
