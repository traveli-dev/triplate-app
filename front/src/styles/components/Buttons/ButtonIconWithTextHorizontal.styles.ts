import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  button: css`
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 8px;
    border: 0;
    border-radius: calc(42px / 2);
    cursor: pointer;
    background-color: transparent;
    width: 100%;

    &:hover {
      background-color: ${theme.color.bgGray};
    }
    &:focus {
      background-color: transparent;
    }
  `,
  icon: css`
    margin-right: 24px;
  `,
  title: css`
    font-size: ${theme.fontSize.md};
  `
}
