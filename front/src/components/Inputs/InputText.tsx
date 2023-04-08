import { InputHTMLAttributes } from 'react'
import { styles } from '@/styles/components/Inputs/InputText.styles'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string
}

export const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <>
      <input css={styles.input} placeholder={placeholder} type="text" />
    </>
  )
}
