import { ButtonFill } from '@/components/Buttons'
import {
  InputErrorMessage,
  InputLabel,
  InputSwitch,
  InputText,
  InputTextArea
} from '@/components/Inputs'
import { SelectBase } from '@/components/Selects'
import { useFormCreateUpdateTriplateSettings } from '@/hooks/forms/useFormCreateUpdateTriplateSettings'
import { TriplateType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Forms/FormCreateUpdateTriplateSettings.styles'

type FormCreateUpdateTriplateSettingsProps = {
  data?: TriplateType
}

export const FormCreateUpdateTriplateSettings = ({
  data
}: FormCreateUpdateTriplateSettingsProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    isDirty,
    isSubmitting
  } = useFormCreateUpdateTriplateSettings(data)

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
            register={register('triplinkId')}
          />
        </InputLabel>
        {!!errors.triplinkId && (
          <div css={styles.layoutErrorMessage}>
            <InputErrorMessage>{errors.triplinkId.message}</InputErrorMessage>
          </div>
        )}
      </div>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="trip" text="たびの説明">
          <InputTextArea
            isInvalid={false}
            placeholder="たびの説明"
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
        <InputLabel htmlFor="trip" text="タグ">
          <InputText
            isInvalid={false}
            placeholder="#お好きなワードをどうぞ"
            // TODO: tag機能
            {...register('tags.0')}
          />
        </InputLabel>
        {!!errors.tags && (
          <div css={styles.layoutErrorMessage}>
            <InputErrorMessage>{errors.tags.message}</InputErrorMessage>
          </div>
        )}
      </div>

      <div css={styles.layoutInput}>
        <h2 css={styles.label}>公開設定</h2>
        <div css={styles.layoutSwitch}>
          <InputSwitch
            id="switch-memo"
            register={register('privacySettings.isMemoPublic')}
            text="ひとことメモを公開"
          />
          {!!errors.privacySettings &&
            !!errors.privacySettings.isMemoPublic && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.privacySettings.isMemoPublic.message}
                </InputErrorMessage>
              </div>
            )}
        </div>
        <div css={styles.layoutSwitch}>
          <InputSwitch
            id="switch-time"
            register={register('privacySettings.isTimePublic')}
            text="時間を公開"
          />
          {!!errors.privacySettings &&
            !!errors.privacySettings.isTimePublic && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.privacySettings.isTimePublic.message}
                </InputErrorMessage>
              </div>
            )}
        </div>
        <div css={styles.layoutSwitch}>
          <InputSwitch
            id="switch-itinerary"
            register={register('privacySettings.isItineraryPublic')}
            text="旅程のメモを公開"
          />
          {!!errors.privacySettings &&
            !!errors.privacySettings.isItineraryPublic && (
              <div css={styles.layoutErrorMessage}>
                <InputErrorMessage>
                  {errors.privacySettings.isItineraryPublic.message}
                </InputErrorMessage>
              </div>
            )}
        </div>
      </div>

      <div css={styles.layoutButton}>
        <ButtonFill
          disabled={!isValid || isSubmitting || !isDirty}
          onClick={handleSubmit(onSubmit)}
        >
          下書きを作成
        </ButtonFill>
      </div>
    </div>
  )
}
