import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import {
  InputImage,
  InputErrorMessage,
  InputLabel,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { useFormCreateUpdateUser } from '@/hooks/forms'
import { useAppDispath } from '@/redux/rootStore'
import { indexesApi } from '@/redux/services/firestore/indexes/indexes'
import { styles } from '@/styles/components/Forms/FormCreateUser.styles'

type FormCreateUserProps = {
  window: 'setName' | 'setProfile'
  setWindow: Dispatch<SetStateAction<'setName' | 'setProfile'>>
  authUser: {
    icon: string
    uid: string
  }
}

export const FormCreateUser = ({
  window,
  authUser,
  setWindow
}: FormCreateUserProps) => {
  const dispatch = useAppDispath()

  const checkUniqueness = async () => {
    const isUnique = await dispatch(
      indexesApi.endpoints.checkUniqueUserId.initiate(currentUserId)
    ).unwrap()

    if (isUnique) {
      setWindow('setProfile')
    } else {
      alert(`ユーザー名「${currentUserId}」はすでに使用されています`)
    }
  }

  const {
    handleUploadImage,
    uploading,
    register,
    handleSubmit,
    onSubmit,
    currentIcon,
    isDirty,
    isValid,
    currentUserId,
    isSubmitting,
    errors
  } = useFormCreateUpdateUser({
    auth: {
      icon: authUser.icon,
      uid: authUser.uid
    }
  })

  return (
    <div>
      {window === 'setName' ? (
        <div css={styles.layoutForm}>
          <div css={styles.kv}>KV</div>
          <div css={styles.layoutInput}>
            <InputLabel
              htmlFor="userId"
              subText="後から変更できません"
              text="ユーザID"
            >
              <div css={styles.userIdWrapper}>
                <span>https://triplate.app/</span>
                <InputText
                  id="userId"
                  isInvalid={!!errors.userId}
                  placeholder="triplate"
                  {...register('userId')}
                />
              </div>
            </InputLabel>
            {!!errors.userId && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>{errors.userId.message}</InputErrorMessage>
              </div>
            )}
          </div>
          <div css={styles.layoutInput}>
            <InputLabel
              htmlFor="name"
              subText="いつでも変更できます"
              text="表示される名前"
            >
              <InputText
                id="name"
                isInvalid={!!errors.name}
                placeholder="表示される名前を入力"
                {...register('name')}
              />
            </InputLabel>
            {!!errors.name && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>{errors.name.message}</InputErrorMessage>
              </div>
            )}
          </div>
          <div css={styles.layoutSubmitButton}>
            <ButtonOutline
              disabled={
                !!errors.userId || !!errors.name || !isDirty || !isValid
              }
              icon="none"
              onClick={checkUniqueness}
            >
              次へ進む
            </ButtonOutline>
          </div>
        </div>
      ) : (
        <div css={styles.layoutForm}>
          <div css={styles.avatarWrapper}>
            <InputImage
              src={currentIcon ?? ''}
              text="変更する"
              type="avatar"
              uploading={uploading}
              onChange={handleUploadImage}
            />
          </div>
          <div css={styles.layoutInput}>
            <InputLabel htmlFor="description" subText="任意" text="自己紹介">
              <InputTextArea
                id="description"
                isInvalid={!!errors.description}
                placeholder="自己紹介"
                {...register('description')}
              />
            </InputLabel>
            {!!errors.description && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.description.message}
                </InputErrorMessage>
              </div>
            )}
          </div>
          <div css={styles.layoutInput}>
            <InputLabel
              htmlFor="instagram"
              subText="任意"
              text="SNSアカウントのユーザ名"
            >
              <div css={styles.snsInput}>
                <Image
                  alt="Instagramのロゴ"
                  height={24}
                  src="/logos/instagram_logo.svg"
                  width={24}
                />
                <span>instagram.com/</span>
                <InputText
                  id="instagram"
                  isInvalid={!!errors.links && !!errors.links.instagram}
                  placeholder="@なしで入力"
                  {...register('links.instagram')}
                />
              </div>
            </InputLabel>
            {!!errors.links && !!errors.links.instagram && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.links.instagram.message}
                </InputErrorMessage>
              </div>
            )}
          </div>
          <div css={styles.layoutInput}>
            <label htmlFor="twitter">
              <div css={styles.snsInput}>
                <Image
                  alt="Twitterのロゴ"
                  height={24}
                  src="/logos/twitter_logo.svg"
                  width={24}
                />
                <span>twitter.com/</span>
                <InputText
                  id="twitter"
                  isInvalid={!!errors.links && !!errors.links.twitter}
                  placeholder="@なしで入力"
                  {...register('links.twitter')}
                />
              </div>
            </label>
            {!!errors.links && !!errors.links.twitter && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.links.twitter.message}
                </InputErrorMessage>
              </div>
            )}
          </div>

          <div css={styles.layoutSubmitButton}>
            <ButtonFill
              disabled={!isValid || isSubmitting || !isDirty}
              onClick={handleSubmit(onSubmit)}
            >
              アカウント作成
            </ButtonFill>
          </div>
        </div>
      )}
    </div>
  )
}
