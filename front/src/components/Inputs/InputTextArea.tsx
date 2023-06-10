import { ComponentPropsWithRef, forwardRef } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextArea.styles'

type InputTextAreaProps = ComponentPropsWithRef<'textarea'> & {
  placeholder: string
}

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(({
  placeholder,
  ...props
}, ref) => {
  return <textarea css={styles.textarea} placeholder={placeholder} ref={ref} {...props} />
})

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
InputTextArea.displayName = "InputTextArea"