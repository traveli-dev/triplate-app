import { ChangeEvent } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  UserUpdateBodyType,
  useCreateUserMutation
} from '@/redux/services/firestore'
import { useUploadImageMutation } from '@/redux/services/storage'
import { getProfilePath } from '@/utils/storage'

type UserData = {
  icon: string | null
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

    .test('max_length', (value, { createError }) => {
      const max = 15
      // valueがない場合はrequiredに引っかかるのでスキップ
      if (!value) return true

      if (value.length > max) {
        return createError({
          message: `ユーザIDを、あと${value.length - max}文字短くしてください`,
          path: 'userId'
        })
      }

      return true
    })
    .matches(
      /^[a-z0-9]+$/,
      'ユーザー名には半角小文字英数字とアンダースコア（_）のみ使用できます'
    )
    .required('ユーザIDは必須です'),
  name: yup
    .string()
    // nameは40文字以下
    .test('max_length', (value, { createError }) => {
      const max = 40
      // valueがない場合はrequiredに引っかかるのでスキップ
      if (!value) return true

      if (value.length > max) {
        return createError({
          message: `名前を、あと${value.length - max}文字短くしてください`,
          path: 'name'
        })
      }

      return true
    })
    .required('名前は必須です'),
  icon: yup.string().required('ユーザアイコンは必須です'),
  description: yup
    .string()
    .nullable()
    // TODO: 自己紹介の
    // 自己紹介は160文字以下
    .test('max_length', (value, { createError }) => {
      const max = 160
      // valueがない場合はrequiredに引っかかるのでスキップ
      if (!value) return true

      if (value.length > max) {
        return createError({
          message: `名前を、あと${value.length - max}文字短くしてください`,
          path: 'name'
        })
      }

      return true
    }),
  links: yup.object().shape({
    instagram: yup
      .string()
      .nullable()
      .matches(/^https?:\/\/(www\.)?instagram\.com/, {
        message: 'InstagramのプロフィールのURLを入力してください',
        excludeEmptyString: true
      }),
    twitter: yup
      .string()
      .nullable()
      .matches(/^https?:\/\/(mobile\.|www\.)?twitter\.com/, {
        message: 'TwitterのプロフィールのURLを入力してください',
        excludeEmptyString: true
      })
  })
})
