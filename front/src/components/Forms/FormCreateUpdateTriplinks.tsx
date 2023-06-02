import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { InputImage, InputLabel, InputText } from '@/components/Inputs'
import { styles } from '@/styles/components/Forms/FormCreateUpdateTriplinks.styles'

export const FormCreateUpdateTriplinks = () => {
  const router = useRouter()
  // createした時にレスポンスでtriplinkIdを受け取る
  const triplinkId = 123

  return (
    <>
      <div css={styles.formWrapper}>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="name" text="旅の名前">
            <InputText id="name" placeholder="ともだちと京都旅行" />
          </InputLabel>
        </div>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="date" text="日付">
            <InputText id="name" placeholder="0000/00/00 ~ 0000/00/00" />
          </InputLabel>
        </div>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="image" text="サムネイルの画像">
            <InputImage alt="" id="image" />
          </InputLabel>
        </div>
      </div>
      <div css={styles.layoutButton}>
        <ButtonFill onClick={() => router.push(`/triplink/${triplinkId}`)}>
          作成する
        </ButtonFill>
      </div>
    </>
  )
}
