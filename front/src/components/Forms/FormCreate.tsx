import { InputText } from '@/components/Inputs/InputText'
import { InputImage } from '@/components/Inputs/InputImage'
import styles from '@/styles/components/Forms/FormCreate.module.scss'
import { ButtonFill } from '@/components/Buttons'

export const FormCreate = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={'text'}>
        旅のなまえ
        <div className={styles.input}>
          <InputText placeholder={'ともだちと京都旅行'} id={'text'} />
        </div>
      </label>
      <label className={styles.label} htmlFor={'date'}>
        日付
        <div className={styles.input}>
          <InputText placeholder={'0000/00/00 ~ 0000/00/00'} id={'date'} />
        </div>
      </label>
      <label className={styles.label} htmlFor={'image'}>
        サムネイルの画像
        <div className={styles.input}>
          <InputImage src={'/images/CardImg/empty.svg'} alt={''} id={'image'} />
        </div>
      </label>
      <div className={styles.button}>
        <ButtonFill>{'作成する'}</ButtonFill>
      </div>
    </div>
  )
}
