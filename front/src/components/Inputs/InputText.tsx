import { ComponentPropsWithRef, forwardRef } from 'react'
import { styles } from '@/styles/components/Inputs/InputText.styles'

type InputTextProps = ComponentPropsWithRef<'input'> & {
  placeholder: string
  isInvalid: boolean
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ placeholder, isInvalid, ...props }, ref) => {
    return (
      <input
        css={styles.input(isInvalid)}
        placeholder={placeholder}
        ref={ref}
        type="text"
        {...props}
      />
    )
  }
)

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
InputText.displayName = 'InputText'
