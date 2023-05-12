import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    margin: 0 16px;
  `,
  headWrapper: css`
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
  `,
  textHead: css`
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `,
  textSub: css`
    margin-top: 8px;
    font-size: ${theme.fontSize.md};
  `,

  tab: css`
    margin-top: 40px;
  `
}
