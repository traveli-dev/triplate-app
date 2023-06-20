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
import { GetTriplinkType, TriplateType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Forms/FormCreateUpdateTriplateSettings.styles'

type FormCreateUpdateTriplateSettingsProps = {
  data?: TriplateType
  triplinks?: GetTriplinkType[]
}

export const FormCreateUpdateTriplateSettings = ({
  data,
  triplinks
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

  const formatSelectTrips = (triplinks?: GetTriplinkType[]) => {
    const formatedData =
      triplinks?.map((triplink) => ({
        name: triplink.title,
        // triplinkデータ全体をvalueにする（リクエスト時にパースする）
        id: JSON.stringify(triplink)
      })) ?? []
    return formatedData
  }

  return (
    <div css={styles.formWrapper}>
      <div css={styles.layoutInput}>
        <InputLabel htmlFor="trip" text="テンプレートにするたび">
          <SelectBase
            disabled={!!data}
            isInvalid={false}
            options={formatSelectTrips(triplinks)}
            placeholder={data ? data.title : 'たびを選択'}
            register={register('triplinkData')}
          />
        </InputLabel>
        {!!errors.triplinkData && (
          <div css={styles.layoutErrorMessage}>
            <InputErrorMessage>{errors.triplinkData.message}</InputErrorMessage>
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
            placeholder="#お好きなワードをどうぞ。例: #大阪観光 #たこやき"
            // TODO: tag機能
            {...register('tags')}
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
