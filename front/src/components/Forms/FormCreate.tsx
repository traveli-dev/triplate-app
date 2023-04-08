import { ButtonFill } from '@/components/Buttons'
import { InputImage } from '@/components/Inputs/InputImage'
import { InputText } from '@/components/Inputs/InputText'
import { styles } from '@/styles/components/Forms/FormCreate.styles'

export const FormCreate = () => {
  return (
    <>
      <div css={styles.formWrapper}>
        <label css={styles.label} htmlFor="text">
          旅のなまえ
          <div css={styles.layoutInput}>
            <InputText id="text" placeholder="ともだちと京都旅行" />
          </div>
        </label>
        <label css={styles.label} htmlFor="date">
          日付
          <div css={styles.layoutInput}>
            <InputText id="date" placeholder="0000/00/00 ~ 0000/00/00" />
          </div>
        </label>
        <label css={styles.label} htmlFor="image">
          サムネイルの画像
          <div css={styles.layoutInput}>
            <InputImage alt="thumbnail_image" id="image" />
          </div>
        </label>
      </div>
      <div css={styles.layoutButton}>
        <ButtonFill>作成する</ButtonFill>
      </div>
    </>
  )
}
