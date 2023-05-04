import { ButtonFill } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import {
  InputImage,
  InputLink,
  InputText,
  InputTextarea
} from '@/components/Inputs'
import { styles } from '@/styles/pages/edit/Profile.styles'

const Profile = () => {
  return (
    <>
      <Header href="/" title="プロフィール編集" />
      <Container bgColor="white" isFull>
        <div css={styles.profileWrapper}>
          <div css={styles.image}>
            <InputImage alt="" shape="round" />
          </div>
          <div css={styles.labelWrapper}>
            <label css={styles.label} htmlFor="name">
              なまえ
              <div css={styles.layoutInput}>
                <InputText id="name" placeholder="なまえを入力してください" />
              </div>
            </label>
            <label css={styles.label} htmlFor="id">
              ユーザID
              <div css={styles.layoutInput}>
                <InputText id="id" placeholder="ユーザIDを入力してください" />
              </div>
            </label>
            <label css={styles.label} htmlFor="status">
              自己紹介
              <div css={styles.layoutInput}>
                <InputTextarea
                  id="status"
                  placeholder="自己紹介を入力してください"
                />
              </div>
            </label>
            <div css={styles.label}>
              SNSリンク
              <div css={styles.layoutInput}>
                <div css={styles.inputLink}>
                  <InputLink
                    iconType="twitter"
                    placeholder="Twitterのリンクを入力してください"
                  />
                </div>
                <div css={styles.inputLink}>
                  <InputLink
                    iconType="instagram"
                    placeholder="Instagramのリンクを入力してください"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ButtonFill>プロフィールを更新</ButtonFill>
      </Container>
    </>
  )
}

export default Profile
