import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  modalWrapper: css`
    position: fixed;
    top: 180px;
    width: 100%;
    max-width: ${theme.breakpoint.md};
    height: 100%;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
  `,
  handler: css`
    width: 72px;
    height: 6px;
    margin: 8px auto 22px auto;
    background-color: ${theme.color.outlineGray};
    border-radius: 100px;
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.lg};
  `,
  date: css`
    margin: 8px 0;
    font-size: ${theme.fontSize.md};
  `,
  layoutButtonIconWithText: css`
    margin: 16px 0;
  `
}
