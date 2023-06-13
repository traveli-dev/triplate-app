import { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '@/config/yup.config'
import {
  UserRequestBodyType,
  useCreateUserMutation,
  useUpdateUserMutation
} from '@/redux/services/firestore'
import { useUploadImageMutation } from '@/redux/services/storage'
import { getProfilePath } from '@/utils/storage'

type UserData = {
  auth: {
    icon: string
    uid: string
  }
  userData?: UserRequestBodyType
}

export const useFormCreateUpdateUser = ({ auth, userData }: UserData) => {
  const router = useRouter()
  const [disabled, setDisabled] = useState(false)
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation()
  const [createUser] = useCreateUserMutation()
  const [updateUser] = useUpdateUserMutation()

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.currentTarget.files) {
        const file = e.currentTarget.files[0]

        const res = await uploadImage({
          file,
          path: getProfilePath(auth.uid)
        })

        if ('error' in res && res.error === 'error') throw Error

        if ('data' in res) {
          setValue('icon', res.data, { shouldDirty: true })
        }
      }
    } catch (e) {
      // TODO: エラーハンドリング
      alert(
        '画像アップロードに失敗しました。大変お手数ですが、再度お試しください'
      )
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isDirty, isValid }
  } = useForm<UserRequestBodyType>({
    resolver: yupResolver(schema),
    // formが少ないのでonChangeで発火
    mode: 'onChange',
    defaultValues: {
      userId: userData ? userData.userId : '',
      name: userData ? userData.name : '',
      icon: userData ? userData.icon : auth.icon,
      description: userData ? userData.description : '',
      links: {
        instagram: userData ? userData.links.instagram : '',
        twitter: userData ? userData.links.twitter : ''
      }
    }
  })

  const currentIcon = useWatch({
    control,
    name: 'icon'
  })
  const currentUserId = useWatch({
    control,
    name: 'userId'
  })

  const onSubmit: SubmitHandler<UserRequestBodyType> = async (data) => {
    setDisabled(true)
    try {
      userData ? await update(data) : await create(data)
      setDisabled(false)
    } catch (e) {
      setDisabled(false)
      // TODO: errorハンドリング
      alert(
        `ユーザ${
          userData ? '情報の更新' : '登録'
        }に失敗しました。大変お手数ですが、再度お試しください`
      )
    }
  }

  const create = async (data: UserRequestBodyType) => {
    await createUser({
      uid: auth.uid,
      body: data
    }).unwrap()
    router.push('/home')
  }

  const update = async (data: UserRequestBodyType) => {
    await updateUser({
      uid: auth.uid,
      body: data
    }).unwrap()
    // TODO: トースト出す？
    alert('更新しました')
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    uploading,
    handleUploadImage,
    errors,
    isDirty,
    isValid,
    disabled,
    currentUserId,
    currentIcon
  }
}

const schema = yup.object({
  userId: yup
    .string()
    .maxLength(15, 'ユーザID')
    .required('ユーザIDは必須です')
    .matches(
      // 半角小文字英数とアンダースコアのみ
      /^[a-z0-9_]+$/,
      'ユーザー名には半角小文字英数字とアンダースコア（_）のみ使用できます'
    ),
  name: yup.string().maxLength(15, '名前').required('表示される名前は必須です'),
  icon: yup.string().required('ユーザアイコンは必須です'),
  description: yup
    .string()
    .maxLength(150, '自己紹介')
    .nullable()
    .convertToNull(),
  links: yup.object().shape({
    instagram: yup
      .string()
      .nullable()
      .convertToNull()
      .max(30, '正しいアカウント名を指定してください')
      // 半角英数とアンダーバー，ピリオドは最初と最後以外可
      .matches(/^(?!\.)[\w.]+(?<!\.)$/, '正しいアカウント名を指定してください'),
    twitter: yup
      .string()
      .nullable()
      .convertToNull()
      .max(15, '正しいアカウント名を指定してください')
      // 半角英数とアンダースコアのみ
      .matches(/^[\w]+$/, '正しいアカウント名を指定してください')
  })
})
