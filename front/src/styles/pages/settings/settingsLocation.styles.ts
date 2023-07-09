import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  headerMail: css`
    font-size: ${theme.fontSize.md};
    margin: 16px 0;
  `,
  headerPush: css`
    font-size: ${theme.fontSize.md};
    margin: 40px 0 16px 0;
  `,
  layoutInput: css`
    padding: 12px 0;
  `
}
