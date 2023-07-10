import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  headerMail: css`
    margin: 16px 0;
    font-size: ${theme.fontSize.md};
  `,
  headerPush: css`
    margin: 40px 0 16px 0;
    font-size: ${theme.fontSize.md};
  `,
  layoutInput: css`
    padding: 12px 0;
  `
}
