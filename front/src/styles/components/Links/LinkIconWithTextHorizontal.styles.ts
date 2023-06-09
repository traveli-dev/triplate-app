import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  link: css`
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 8px;
    text-decoration: none;
    border-radius: calc(42px / 2);
    &:hover,
    &:focus {
      background-color: ${theme.color.bgGray};
    }
  `,
  icon: css`
    margin-right: 24px;
  `,
  title: css`
    font-size: ${theme.fontSize.md};
  `
}
