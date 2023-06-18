import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import yup from '@/config/yup.config'
import { useAppSelector } from '@/redux/rootStore'
import {
  TriplateType,
  GetTriplinkType,
  useCreateTriplateMutation,
  useUpdateTriplateMutation
} from '@/redux/services/firestore'
import { currentUserSelectors } from '@/redux/stores'

const triplateId = uuidv4()

export const useFormCreateUpdateTriplateSettings = (
  triplateSettingsData?: TriplateType
) => {
  const router = useRouter()
  const [createTriplateSettings] = useCreateTriplateMutation()
  const [updateTriplateSettings] = useUpdateTriplateMutation()

  const currentUesrData = useAppSelector(currentUserSelectors.currentUserData)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<TriplateType>({
    resolver: yupResolver(triplateSettingsData ? updateSchema : createSchema),
    mode: 'onChange',
    defaultValues: {
      triplinkId: '',
      description: triplateSettingsData?.description ?? '',
      tags: triplateSettingsData?.tags ?? [],
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

  const onSubmit: SubmitHandler<TriplateType> = async (data) => {
    try {
      triplateSettingsData ? await update(data) : await create(data)
    } catch (e) {
      // TODO: errorハンドリング
      console.error(e)
    }
  }

  const create = async (data: TriplateType) => {
    const triplinkData: GetTriplinkType = JSON.parse(data.triplinkId)

    const body = {
      ...data,
      triplinkId: triplinkData.id,
      title: triplinkData.title,
      thumbnail: triplinkData.thumbnail,
      date: triplinkData.date,
      isPublished: false
    }

    await createTriplateSettings({
      id: triplateId,
      uid: currentUesrData.uid,
      body
    }).unwrap()
    router.push(`/triplate/${triplateId}/edit/memory`)
  }

  const update = async (data: TriplateType) => {
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

const createSchema = yup.object({
  triplinkId: yup.string().required('テンプレートにするたびは必須です'),
  tags: yup.array().of(yup.string()),
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

const updateSchema = createSchema.shape({
  triplinkId: yup.string()
})
