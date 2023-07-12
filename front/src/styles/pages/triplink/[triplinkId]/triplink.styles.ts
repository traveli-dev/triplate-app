import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutButtonIconRound: css`
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 100;
  `,
  infoWrapper: css`
    width: 100%;
    max-width: ${theme.breakpoint.md};
    height: 100%;
    padding: 32px 16px 8px 16px;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
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
    text-align: center;
  `
}
