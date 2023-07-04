import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import yup from '@/config/yup.config'
import { currentUserSelectors } from '@/redux/features'
import {
  TriplateType,
  GetTriplinkType,
  useCreateTriplateMutation,
  useUpdateTriplateMutation
} from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import { formatTimestamp } from '@/utils/dates'
import { extractTags, joinTags } from '@/utils/tags'

const triplateId = uuidv4()

type InputType = Omit<TriplateType, 'tags' | 'triplinkId'> & {
  tags: string | null
  triplinkData: string
}

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
  } = useForm<InputType>({
    resolver: yupResolver(triplateSettingsData ? updateSchema : createSchema),
    mode: 'onChange',
    defaultValues: {
      triplinkData: '',
      description: triplateSettingsData?.description ?? '',
      tags: joinTags(triplateSettingsData?.tags),
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

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      triplateSettingsData ? await update(data) : await create(data)
    } catch (e) {
      // TODO: errorハンドリング
      console.error(e)
    }
  }

  const create = async (data: InputType) => {
    const { triplinkData, ...otherData } = data
    const tags = extractTags(data.tags ?? '')
    const parsedData: GetTriplinkType = JSON.parse(triplinkData)

    const body = {
      ...otherData,
      triplinkId: parsedData.id,
      title: parsedData.title,
      thumbnail: parsedData.thumbnail,
      date: formatTimestamp(parsedData.date),
      isPublished: false,
      tags
    }

    await createTriplateSettings({
      id: triplateId,
      uid: currentUesrData.uid,
      body
    }).unwrap()
    router.push(`/triplate/${triplateId}/edit/memory`)
  }

  const update = async (data: InputType) => {
    const tags = extractTags(data.tags ?? '')

    await updateTriplateSettings({
      id: String(router.query.triplateId),
      body: {
        description: data.description,
        privacySettings: data.privacySettings,
        tags
      }
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
  triplinkData: yup.string().required('テンプレートにするたびは必須です'),
  tags: yup.string().nullable().convertToNull(),
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
  triplinkData: yup.string()
})
