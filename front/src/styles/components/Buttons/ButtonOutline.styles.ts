import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

export const styles = {
  button: css`
    width: 100%;
    height: 56px;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.renewalColor.black};
    background-color: ${theme.renewalColor.white};
    border: 2px solid ${theme.renewalColor.black};
    border-radius: 100px;

    &:not([disabled]) {
      ${buttonAnimation({ scale: 0.95, transition: '0.1s' })}
    }
    &:hover,
    &:focus {
      background-color: ${theme.renewalColor.hoverGray};
    }
    &:disabled {
      color: ${theme.renewalColor.gray};
      cursor: default;
      background-color: ${theme.renewalColor.borderGray};
      border-color: ${theme.renewalColor.borderGray};
    }
  `,
  labelWrapper: css`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  `
}
