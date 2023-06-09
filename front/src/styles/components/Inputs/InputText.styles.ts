import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  input: css`
    box-sizing: border-box;
    width: 100%;
    padding: 15px 16px;
    font-size: ${theme.fontSize.md};
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 100px;

    &:hover,
    &:focus {
      outline: 2px solid ${theme.color.outlineGray};
    }
  `
}
