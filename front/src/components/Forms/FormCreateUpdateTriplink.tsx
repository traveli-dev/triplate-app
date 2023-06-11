import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { InputImage, InputLabel, InputText } from '@/components/Inputs'
import { useFormCreateUpdateTriplink } from '@/hooks/forms'
import { styles } from '@/styles/components/Forms/FormCreateUpdateTriplink.styles'

export const FormCreateUpdateTriplink = () => {
  const router = useRouter()
  const { handleUploadImage, triplinkId, url, uploading } =
    useFormCreateUpdateTriplink()

  return (
    <>
      <div css={styles.formWrapper}>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="name" text="旅の名前">
            <InputText
              id="name"
              isInvalid={false}
              placeholder="ともだちと京都旅行"
            />
          </InputLabel>
        </div>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="date" text="日付">
            <InputText
              id="name"
              isInvalid={false}
              placeholder="0000/00/00 ~ 0000/00/00"
            />
          </InputLabel>
        </div>
        <div css={styles.layoutInput}>
          <InputLabel htmlFor="image" text="サムネイルの画像">
            <InputImage
              id="image"
              src={url}
              uploading={uploading}
              onChange={handleUploadImage}
            />
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
