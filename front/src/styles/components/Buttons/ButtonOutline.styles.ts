import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

export const styles = {
  button: css`
    width: 100%;
    height: 56px;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.blue};
    background-color: ${theme.color.white};
    border: 2px solid ${theme.color.blue};
    border-radius: 100px;

    &:not([disabled]) {
      ${buttonAnimation({ scale: 0.95, transition: '0.1s' })}
    }
    &:hover,
    &:focus {
      background-color: ${theme.color.bgBlue};
    }
    &:disabled {
      color: ${theme.color.gray};
      cursor: default;
      background-color: ${theme.color.outlineGray};
      border-color: ${theme.color.outlineGray};
    }
  `,
  labelWrapper: css`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  `
}
