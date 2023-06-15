import { ButtonFill } from '@/components/Buttons'
import { InputLabel, InputText, InputTextArea } from '@/components/Inputs'
import { SelectBase } from '@/components/Selects'
import { styles } from '@/styles/components/Forms/FormCreateUpdateTriplateSettings.styles'

export const FormCreateUpdateTriplateSettings = () => {
  const samples = [
    { name: 'かだといそのうら', id: '9bcecdd8-fed9-4d72-8a40-b54c7b9ec05b' },
    {
      name: '和歌山市ラーメン巡り',
      id: 'b533283c-adde-4107-aa0a-943ddccb5278'
    },
    { name: '神社巡り', id: 'b21323a4-05f8-42db-9ce7-a2f29946595f' },
    { name: '海遊館', id: 'a0bf63a0-0367-11ee-be56-0242ac120002' }
  ]

  return (
    <div css={styles.formWrapper}>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="trip" text="テンプレートにするたび">
          <SelectBase
            isInvalid={false}
            options={samples}
            placeholder="たびを選択"
          />
        </InputLabel>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="trip" text="たびの説明">
          <InputTextArea isInvalid={false} placeholder="たびの説明" />
        </InputLabel>
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="trip" text="タグ">
          <InputText isInvalid={false} placeholder="#お好きなワードをどうぞ" />
        </InputLabel>
      </div>

      <div css={styles.layoutButton}>
        <ButtonFill>下書きを作成</ButtonFill>
      </div>
    </div>
  )
}
