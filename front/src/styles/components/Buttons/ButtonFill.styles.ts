import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

export const styles = {
  button: (isSquare: boolean) => css`
    width: 100%;
    padding: 16px 0;
    display: flex;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.white};
    background-color: ${theme.color.black};
    border-radius: ${isSquare ? '8px' : '100px'};

    &:not([disabled]) {
      ${buttonAnimation({ scale: 0.95, transition: '0.1s' })}
    }
    &:hover,
    &:focus {
      background-color: ${theme.color.hoverBlack};
    }
    &:disabled {
      color: ${theme.color.gray};
      cursor: default;
      background-color: ${theme.color.outlineGray};
      border-color: ${theme.color.outlineGray};
    }
  `,
  layoutIcon: css`
    margin-right: 10px;
  `,
  labelWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  `
}
