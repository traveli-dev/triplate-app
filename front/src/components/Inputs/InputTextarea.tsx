import { styles } from '@/styles/components/Inputs/InputTextarea.styles'

type InputTextareaProps = {
  placeholder: string
}
export const InputTextarea = ({ placeholder }: InputTextareaProps) => {
  return <textarea css={styles} placeholder={placeholder} />
}
