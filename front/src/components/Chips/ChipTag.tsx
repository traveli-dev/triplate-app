import { styles } from '@/styles/components/Chips/ChipTag.styles'

export type ChipTagProps = {
  tag: string
  isRound?: boolean
  fontSize: 'sm' | 'md'
}

export const ChipTag = ({ tag, ...options }: ChipTagProps) => {
  return <p css={styles.chip({ ...options })}>{tag}</p>
}
