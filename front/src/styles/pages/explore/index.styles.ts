import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  heading1: css`
    padding: 24px 0;
    font-size: ${theme.fontSize.lg};
  `,
  exploreList: css`
    padding-bottom: 16px;
  `,
  helpButton: css`
    padding: 8px;
    background-color: ${theme.renewalColor.white};
    border-radius: 100px;
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
    }
    &:focus {
      background-color: ${theme.renewalColor.white};
    }
  `
}
