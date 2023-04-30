import { InputHTMLAttributes } from 'react'
import { styles } from '@/styles/components/Inputs/InputText.styles'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string
}

export const InputText = ({ placeholder, ...props }: InputTextProps) => {
  return (
    <input
      css={styles.input}
      placeholder={placeholder}
      type="text"
      {...props}
    />
  )
}
