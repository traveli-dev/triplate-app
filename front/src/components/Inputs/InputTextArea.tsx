import { ComponentPropsWithRef, forwardRef } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextArea.styles'

type InputTextAreaProps = ComponentPropsWithRef<'textarea'> & {
  placeholder: string
  isInvalid: boolean
}

export const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(({ placeholder, isInvalid, ...props }, ref) => {
  return (
    <textarea
      css={styles.textarea(isInvalid)}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  )
})

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
InputTextArea.displayName = 'InputTextArea'
