import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

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

const styles = {
  wrapper: css`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  `,
  chip: css`
    background-color: ${theme.color.bgGray};
    padding: 8px;
    margin: 8px 8px 0 0;
    font-size: ${theme.fontSize.sm};
    border-radius: 4px;
  `
}
