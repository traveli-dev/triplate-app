import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  link: css`
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 8px;
    color: ${theme.color.black};
    text-decoration: none;
    border-radius: 8px;
    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  icon: css`
    margin-right: 25px;
  `,
  title: css`
    font-size: ${theme.fontSize.md};
  `
}
