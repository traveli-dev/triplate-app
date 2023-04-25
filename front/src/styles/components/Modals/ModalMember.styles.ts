import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutLinkItem: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  `,
  title: css`
    margin: 32px 0 0 0;
    font-size: ${theme.fontSize.lg};
  `
}
