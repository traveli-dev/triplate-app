import React, { ButtonHTMLAttributes } from 'react'
import styles from '@/styles/components/Buttons/ButtonOutline.module.scss'
import { HiOutlinePlus } from 'react-icons/hi'

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
    <button className={styles.button} {...props}>
      <div className={styles.label_wrapper}>
        {icon == 'plus' && <HiOutlinePlus size={'24px'} />}
        {children}
      </div>
    </button>
  )
}
