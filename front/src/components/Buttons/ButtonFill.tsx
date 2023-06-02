import React, { ComponentPropsWithRef } from 'react'
import { styles } from '@/styles/components/Buttons/ButtonFill.styles'

type ButtonFillProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  //TODO: icon
}

export const ButtonFill = ({ children, ...props }: ButtonFillProps) => {
  return (
    <button css={styles.button} {...props}>
      {children}
    </button>
  )
}
