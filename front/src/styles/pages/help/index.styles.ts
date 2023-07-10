import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  header: css`
    padding: 24px 0;
    font-size: ${theme.fontSize.lg};
  `,
  description: css`
    margin-bottom: 16px;
    font-size: ${theme.fontSize.md};
  `,
  layoutButton: css`
    margin-bottom: 32px;
  `
}
