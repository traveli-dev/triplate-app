import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import {
  InputAvatar,
  InputLabel,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { useFormCreateUpdateUser } from '@/hooks/forms'
import { styles } from '@/styles/components/Forms/FormCreateUser.styles'

type FormCreateUserProps = {
  window: 'setName' | 'setProfile'
  setWindow: Dispatch<SetStateAction<'setName' | 'setProfile'>>
  authUser: {
    icon: string
    uid: string
    email: string
  }
}

export const FormCreateUser = ({
  window,
  authUser,
  setWindow
}: FormCreateUserProps) => {
  const {
    handleUploadImage,
    uploading,
    register,
    handleSubmit,
    onSubmit,
    currentIcon,
    isDirty,
    isValid,
    errors
  } = useFormCreateUpdateUser({
    icon: authUser.icon,
    uid: authUser.uid,
    email: authUser.email
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
                  placeholder="triplate"
                  {...register('userId')}
                />
              </div>
            </InputLabel>
          </div>
          <div css={styles.layoutInput}>
            <InputLabel
              htmlFor="name"
              subText="いつでも変更できます"
              text="表示される名前"
            >
              <InputText
                id="name"
                placeholder="表示される名前を入力"
                {...register('name')}
              />
            </InputLabel>
          </div>
          <div css={styles.layoutSubmitButton}>
            <ButtonOutline
              disabled={
                !!errors.userId || !!errors.name || !isDirty || !isValid
              }
              icon="none"
              onClick={() => {
                setWindow('setProfile')
              }}
            >
              次へ進む
            </ButtonOutline>
          </div>
        </div>
      ) : (
        <div css={styles.layoutForm}>
          <div css={styles.avatarWrapper}>
            <InputAvatar
              src={currentIcon ?? ''}
              uploading={uploading}
              onChange={handleUploadImage}
            />
            <button css={styles.avatarChangeButton}>変更する</button>
          </div>
          <div css={styles.layoutInput}>
            <InputLabel htmlFor="description" subText="任意" text="自己紹介">
              <InputTextArea id="description" placeholder="自己紹介" />
            </InputLabel>
          </div>
          <div css={styles.layoutInput}>
            <InputLabel
              htmlFor="sns"
              subText="任意"
              text="SNSアカウントのリンク"
            >
              <div css={styles.snsInput}>
                <Image
                  alt="Instagramのロゴ"
                  height={26}
                  src="/logos/instagram_logo.svg"
                  width={26}
                />
                <InputText
                  id="sns"
                  placeholder="InstagramのURL"
                  {...register('links.instagram')}
                />
              </div>
              <div css={styles.snsInput}>
                <Image
                  alt="Twitterのロゴ"
                  height={26}
                  src="/logos/twitter_logo.svg"
                  width={26}
                />
                <InputText
                  placeholder="TwitterのURL"
                  {...register('links.twitter')}
                />
              </div>
            </InputLabel>
          </div>

          <div css={styles.layoutSubmitButton}>
            <ButtonFill disabled={!isValid} onClick={handleSubmit(onSubmit)}>
              アカウント作成
            </ButtonFill>
          </div>
        </div>
      )}
    </div>
  )
}
