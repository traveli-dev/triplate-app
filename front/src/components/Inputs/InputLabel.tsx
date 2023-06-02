import { ReactElement } from 'react'
import { styles } from '@/styles/components/Inputs/InputLabel.styles'

type InputLabelProps = {
  htmlFor: string
  children: ReactElement
  text: string
  subText?: string
}

export const InputLabel = ({
  htmlFor,
  children,
  subText,
  text
}: InputLabelProps) => {
  return (
    <label css={styles.label} htmlFor={htmlFor}>
      {text}
      {subText && <span css={styles.subText}>{subText}</span>}
      <div css={styles.childrenWrapper}>{children}</div>
    </label>
  )
}
