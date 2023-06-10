import { ChangeEvent } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '@/config/yup.config'
import {
  UserUpdateBodyType,
  useCreateUserMutation
} from '@/redux/services/firestore'
import { useUploadImageMutation } from '@/redux/services/storage'
import { getProfilePath } from '@/utils/storage'

type UserData = {
  icon: string
  uid: string
  email: string
}

export const useFormCreateUpdateUser = (user: UserData) => {
  const router = useRouter()
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation()
  const [createUser] = useCreateUserMutation()

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
          setValue('icon', res.data)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<UserUpdateBodyType>({
    resolver: yupResolver(schema),
    // 入力要素が少ないのではじめからonChange時にバリデーションを発火させる
    mode: 'onChange',
    defaultValues: {
      userId: '',
      name: '',
      icon: user.icon,
      description: '',
      links: {
        instagram: '',
        twitter: ''
      }
    }
  })

  const currentIcon = useWatch({
    control,
    name: 'icon'
  })

  const onSubmit: SubmitHandler<UserUpdateBodyType> = async (data) => {
    await createUser({
      uid: user.uid,
      body: {
        ...data,
        email: user.email
      }
    }).unwrap()
    router.push('/home')
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    uploading,
    handleUploadImage,
    errors,
    currentIcon
  }
}

const schema = yup.object({
  userId: yup
    .string()
    .maxLength(15, 'ユーザID')
    .matches(
      // 半角英数とアンダースコアのみ
      /^[\w]+$/,
      'ユーザー名には半角英数字とアンダースコア（_）のみ使用できます'
    )
    .required('ユーザIDは必須です'),
  name: yup.string().maxLength(15, '名前').required('表示される名前は必須です'),
  icon: yup.string().required('ユーザアイコンは必須です'),
  description: yup.string().nullable().maxLength(150, '自己紹介'),
  links: yup.object().shape({
    instagram: yup
      .string()
      .nullable()
      .convertToNull()
      // 半角英数とアンダーバー，ピリオドは最初と最後以外可
      .matches(/^(?!\.)[\w.]+(?<!\.)$/, '正しいアカウント名を指定してください'),
    twitter: yup
      .string()
      .nullable()
      .convertToNull()
      .min(5, '正しいアカウント名を指定してください')
      .max(15, '正しいアカウント名を指定してください')
      // 半角英数とアンダースコアのみ
      .matches(/^[\w]+$/, '正しいアカウント名を指定してください')
  })
})
