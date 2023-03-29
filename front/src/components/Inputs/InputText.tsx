import styles from '@/styles/components/Inputs/InputText.module.scss'
import { InputHTMLAttributes } from 'react'
type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: String
}

export const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <input type={'text'} className={styles.input} placeholder={placeholder} />
  )
}
