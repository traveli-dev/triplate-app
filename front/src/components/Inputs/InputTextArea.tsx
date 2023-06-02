import { ComponentProps } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextArea.styles'

type InputTextAreaProps = ComponentProps<'textarea'> & {
  placeholder: string
}

export const InputTextArea = ({
  placeholder,
  ...props
}: InputTextAreaProps) => {
  return <textarea css={styles.textarea} placeholder={placeholder} {...props} />
}
