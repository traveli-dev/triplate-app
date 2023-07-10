import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  header: css`
    font-size: ${theme.fontSize.lg};
    padding: 24px 0;
  `,
  description: css`
    font-size: ${theme.fontSize.md};
    margin-bottom: 16px;
  `
}
