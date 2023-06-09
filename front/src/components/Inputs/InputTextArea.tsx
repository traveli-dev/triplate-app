import { ComponentPropsWithRef } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextArea.styles'

type InputTextAreaProps = ComponentPropsWithRef<'textarea'> & {
  placeholder: string
}

export const InputTextArea = ({
  placeholder,
  ...props
}: InputTextAreaProps) => {
  return <textarea css={styles.textarea} placeholder={placeholder} {...props} />
}
