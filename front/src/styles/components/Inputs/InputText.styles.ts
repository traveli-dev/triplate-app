import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  input: css`
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    font-size: ${theme.fontSize.md};
    color: ${theme.color.black};
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 100px;

    &:hover,
    &:focus {
      outline: 2px solid ${theme.color.outlineGray};
    }
  `
}
