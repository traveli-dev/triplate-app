import { css } from '@emotion/react'
import { ChipTagProps } from '@/components/Chips'
import { theme } from '@/styles/theme'

type ChipTagStyleType = Omit<ChipTagProps, 'tag'>
type FontSizeStyleType = Omit<ChipTagStyleType, 'isRound'>

const setFontSize = ({ fontSize }: FontSizeStyleType) => {
  if (fontSize === 'sm') return theme.fontSize.sm
  else if (fontSize === 'md') return theme.fontSize.md
}

export const styles = {
  chip: ({ isRound, fontSize }: ChipTagStyleType) => css`
    display: inline-block;
    padding: 8px;
    font-size: ${setFontSize({ fontSize })};
    background-color: ${theme.color.bgGray};
    border-radius: ${isRound ? '100px' : '4px'};
  `
}
