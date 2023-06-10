import { ButtonFill } from '@/components/Buttons'
import {
  InputAvatar,
  InputLabel,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { useFormCreateUser } from '@/hooks/forms'
import { styles } from '@/styles/components/Forms/FormUpdateUser.styles'

// TODO: 引っ張ってくる可能性が高い
type FormUpdateUserProps = {
  data: {
    icon: string | null
    uid: string
  }
}

export const FormUpdateUser = ({ data }: FormUpdateUserProps) => {
  // TODO: disabled
  // const [disabled, setDisabled] = useState(false)
  const { url, uploading, handleUploadImage } = useFormCreateUser(data)

  return (
    <div>
      <div css={styles.avatarWrapper}>
        <InputAvatar
          src={url}
          uploading={uploading}
          onChange={handleUploadImage}
        />
        <button css={styles.avatarChangeButton}>変更する</button>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel
          htmlFor="userId"
          subText="後から変更できません"
          text="ユーザID"
        >
          <div css={styles.userIdWrapper}>
            <span>https://triplate.app/</span>
            <InputText id="userId" placeholder="triplate" />
          </div>
        </InputLabel>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel
          htmlFor="name"
          subText="いつでも変更できます"
          text="表示される名前"
        >
          <InputText id="name" placeholder="表示される名前を入力" />
        </InputLabel>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="description" subText="任意" text="自己紹介">
          <InputTextArea id="description" placeholder="自己紹介" />
        </InputLabel>
      </div>
      <div css={styles.layoutSubmitButton}>
        <ButtonFill>アカウント作成</ButtonFill>
      </div>
    </div>
  )
}
