import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  input: (isInvalid: boolean) => css`
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    font-size: ${theme.fontSize.md};
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 100px;
    outline: ${isInvalid ? `2px solid ${theme.color.red}` : 'none'};

    &:hover,
    &:focus {
      outline: 2px solid
        ${isInvalid ? theme.color.red : theme.color.outlineGray};
    }
  `
}
