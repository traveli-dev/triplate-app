import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  textarea: (isInvalid: boolean) => css`
    box-sizing: border-box;
    width: 100%;
    height: 72px;
    padding: 12px 16px;
    font-size: ${theme.fontSize.md};
    line-height: 24px;
    resize: none;
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 16px;
    outline: ${isInvalid ? `2px solid ${theme.color.red}` : 'none'};

    &:hover,
    &:focus {
      outline: 2px solid
        ${isInvalid ? theme.color.red : theme.color.outlineGray};
    }
  `
}
