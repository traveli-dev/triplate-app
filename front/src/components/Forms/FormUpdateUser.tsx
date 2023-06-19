import Image from 'next/image'
import { ButtonFill } from '@/components/Buttons'
import {
  InputErrorMessage,
  InputImage,
  InputLabel,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { useFormCreateUpdateUser } from '@/hooks/forms'
import { UserRequestBodyType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Forms/FormUpdateUser.styles'

type FormUpdateUserProps = {
  authUser: {
    icon: string
    uid: string
  }
  data: UserRequestBodyType
}

export const FormUpdateUser = ({ data, authUser }: FormUpdateUserProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    uploading,
    handleUploadImage,
    errors,
    isDirty,
    isSubmitting,
    isValid,
    currentIcon
  } = useFormCreateUpdateUser({ userData: data, auth: authUser })

  return (
    <div css={styles.layoutForm}>
      <div css={styles.avatarWrapper}>
        <InputImage
          src={currentIcon}
          text="変更する"
          type="avatar"
          uploading={uploading}
          onChange={handleUploadImage}
        />
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="userId" subText="変更できません" text="ユーザID">
          <div css={styles.userIdWrapper}>
            <span>https://triplate.app/</span>
            <InputText
              disabled={true}
              id="userId"
              isInvalid={false}
              placeholder="triplate"
              {...register('userId')}
            />
          </div>
        </InputLabel>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="name" text="表示される名前">
          <InputText
            id="name"
            {...register('name')}
            isInvalid={!!errors.name}
            placeholder="表示される名前を入力"
          />
        </InputLabel>
        {!!errors.name && (
          <div css={styles.layoutErrorMessage}>
            <InputErrorMessage>{errors.name.message}</InputErrorMessage>
          </div>
        )}
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
            <InputErrorMessage>{errors.description.message}</InputErrorMessage>
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
          disabled={isSubmitting || !isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          プロフィールを更新
        </ButtonFill>
      </div>
    </div>
  )
}
