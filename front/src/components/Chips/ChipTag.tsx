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
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  `,
  chip: css`
    padding: 8px;
    margin: 8px 8px 0 0;
    font-size: ${theme.fontSize.sm};
    background-color: ${theme.color.bgGray};
    border-radius: 4px;
  `
}
