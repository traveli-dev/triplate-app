import { ChipTag } from '@/components/Chips'
import { styles } from '@/styles/components/Chips/ChipTagList.styles'

type ChipTagListProps = {
  tagList: string[]
}

export const ChipTagList = ({ tagList }: ChipTagListProps) => {
  return (
    <ul css={styles.wrapper}>
      {tagList.map((tag, index) => (
        <li key={index}>
          <ChipTag fontSize="sm" tag={tag} />
        </li>
      ))}
    </ul>
  )
}
