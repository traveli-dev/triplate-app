import { UseFormRegisterReturn } from 'react-hook-form'
import { styles } from '@/styles/components/Inputs/InputSwitch.styles'

type InputSwitchProps = {
  id: string
  text: string
  register: UseFormRegisterReturn
}

export const InputSwitch = ({ id, text, register }: InputSwitchProps) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.text}>{text}</span>
      <label css={styles.checkbox} htmlFor={id}>
        <input css={styles.disable} {...register} id={id} type="checkbox" />
      </label>
    </div>
  )
}
