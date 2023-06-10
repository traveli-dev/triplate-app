import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import {
  InputAvatar,
  InputLabel,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { useFormCreateUpdateUser } from '@/hooks/forms'
import { auth } from '@/lib/firebase'
import { useAppSelector } from '@/redux/rootStore'
import { authSelectors } from '@/redux/stores'
import { styles } from '@/styles/pages/user/new.styles'

const UserNew = () => {
  const router = useRouter()
  const authUser = useAppSelector(authSelectors.currentAuthUser)
  const [window, setWindow] = useState<'setName' | 'setProfile'>('setName')

  const {
    handleUploadImage,
    uploading,
    register,
    handleSubmit,
    onSubmit,
    currentIcon
  } = useFormCreateUpdateUser({
    icon: authUser.icon,
    uid: authUser.uid ?? '',
    email: authUser.email ?? ''
  })

  const deleteAuthHandler = () => {
    if (auth.currentUser) {
      auth.currentUser.delete()
    }
    router.push('/')
  }

  return (
    <div>
      {!authUser.uid ? (
        <p>ログインに失敗しました。大変お手数ですが、再度お試しください</p>
      ) : (
        <>
          {window === 'setName' ? (
            <Header title="アカウント作成" />
          ) : (
            <Header
              title="プロフィール設定"
              onClick={() => setWindow('setName')}
            />
          )}
          <Container bgColor="white" isFull>
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
                    icon="none"
                    onClick={() => {
                      setWindow('setProfile')
                    }}
                  >
                    次へ進む
                  </ButtonOutline>
                </div>
                <button css={styles.cancelButton} onClick={deleteAuthHandler}>
                  やっぱりやめる
                </button>
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
                  <InputLabel
                    htmlFor="description"
                    subText="任意"
                    text="自己紹介"
                  >
                    <InputTextArea id="description" placeholder="自己紹介" />
                  </InputLabel>
                </div>
                <div css={styles.layoutInput}>
                  <InputLabel htmlFor="sns" subText="任意" text="SNSリンク">
                    <div css={styles.snsInput}>
                      <Image
                        alt="Instagramのロゴ"
                        height={26}
                        src="/logos/instagram_logo.svg"
                        width={26}
                      />
                      <InputText
                        id="userId"
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
                        id="sns"
                        placeholder="TwitterのURL"
                        {...register('links.twitter')}
                      />
                    </div>
                  </InputLabel>
                </div>

                <div css={styles.layoutSubmitButton}>
                  <ButtonFill onClick={handleSubmit(onSubmit)}>
                    アカウント作成
                  </ButtonFill>
                </div>
              </div>
            )}
          </Container>
        </>
      )}
    </div>
  )
}

export default UserNew
