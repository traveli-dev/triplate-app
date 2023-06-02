import { InputHTMLAttributes } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextArea.styles'

type InputTextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string
}

export const InputTextArea = ({
  placeholder,
  ...props
}: InputTextAreaProps) => {
  return (
    <textarea
      css={styles.textarea}
      placeholder={placeholder}
      type="text"
      {...props}
    />
  )
}
