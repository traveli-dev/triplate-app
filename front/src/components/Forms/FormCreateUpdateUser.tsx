import { ButtonFill } from '@/components/Buttons'
import { InputLabel, InputText, InputTextArea } from '@/components/Inputs'
import { styles } from '@/styles/components/Forms/FormCreateUpdateUser.styles'

export const FormCreateUpdateUser = () => {
  // TODO: disabled
  // const [disabled, setDisabled] = useState(false)

  return (
    <form>
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
    </form>
  )
}
