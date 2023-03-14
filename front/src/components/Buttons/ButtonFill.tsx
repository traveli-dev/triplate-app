import React, { ButtonHTMLAttributes } from 'react'
import styles from '@/styles/components/Buttons/ButtonFill.module.scss'

type ButtonFillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  //TODO: icon
}

export const ButtonFill = ({ children, ...props }: ButtonFillProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}
