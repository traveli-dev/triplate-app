import { styles } from '@/styles/components/Chips/ChipTag.styles'

type ChipTagProps = {
  tag: string[]
}

export const ChipTag = ({ tag }: ChipTagProps) => {
  return (
    <ul css={styles.wrapper}>
      {tag.map((value, index) => (
        <li key={index}>
          <p css={styles.chip}>{value}</p>
        </li>
      ))}
    </ul>
  )
}
