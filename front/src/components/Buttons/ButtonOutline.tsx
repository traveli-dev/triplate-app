import React, { ComponentPropsWithRef } from 'react'
import { IconType } from 'react-icons'
import { styles } from '@/styles/components/Buttons/ButtonOutline.styles'

type ButtonOutlineProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  Icon?: IconType
}

export const ButtonOutline = ({
  children,
  Icon,
  ...props
}: ButtonOutlineProps) => {
  return (
    <button css={styles.button} {...props}>
      <div css={styles.labelWrapper}>
        {Icon && <Icon size={24} />}
        {children}
      </div>
    </button>
  )
}
