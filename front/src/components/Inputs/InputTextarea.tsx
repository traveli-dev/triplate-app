import { TextareaHTMLAttributes } from 'react'
import { styles } from '@/styles/components/Inputs/InputTextarea.styles'

type InputTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string
  id: string
}
export const InputTextarea = ({ placeholder, id }: InputTextareaProps) => {
  return <textarea css={styles} id={id} placeholder={placeholder} />
}
