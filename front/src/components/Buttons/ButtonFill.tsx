import React, { ComponentPropsWithRef } from 'react'
import { IconType } from 'react-icons'
import { styles } from '@/styles/components/Buttons/ButtonFill.styles'

type ButtonFillProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  Icon?: IconType
  isSquare?: boolean
}

export const ButtonFill = ({
  children,
  Icon,
  isSquare = false,
  ...props
}: ButtonFillProps) => {
  return (
    <button css={styles.button(isSquare)} {...props}>
      <span css={styles.labelWrapper}>
        {Icon && <Icon css={styles.layoutIcon} size={24} />}
        {children}
      </span>
    </button>
  )
}
