import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = css`
  width: 100%;

  padding: 16px;
  font-size: ${theme.fontSize.md};
  color: ${theme.color.black};
  resize: none;

  background-color: ${theme.color.bgGray};
  border: 0;
  border-radius: 16px;

  &:hover,
  &:focus {
    outline: 2px solid ${theme.color.outlineGray};
  }
`
