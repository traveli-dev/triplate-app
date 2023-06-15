import { styles } from '@/styles/components/Inputs/InputSwitch.styles'

type InputSwitchProps = {
  id: string
  text: string
}

export const InputSwitch = ({ id, text }: InputSwitchProps) => {
  return (
    <div css={styles.wrapper}>
      <label css={styles.checkbox} htmlFor={id}>
        <input css={styles.disable} id={id} type="checkbox" />
      </label>
      <span css={styles.text}>{text}</span>
    </div>
  )
}
