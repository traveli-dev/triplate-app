import React, { ButtonHTMLAttributes } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonOutline.styles'

type ButtonOutlineProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  icon: 'plus' | 'none'
}

export const ButtonOutline = ({
  children,
  icon,
  ...props
}: ButtonOutlineProps) => {
  return (
    <button css={styles.button} {...props}>
      <div css={styles.labelWrapper}>
        {icon == 'plus' && <HiOutlinePlus size={24} />}
        {children}
      </div>
    </button>
  )
}
