import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutLinkItem: css`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  title: css`
    font-size: ${theme.fontSize.lg};
    margin: 32px 0 0 0;
  `
}
