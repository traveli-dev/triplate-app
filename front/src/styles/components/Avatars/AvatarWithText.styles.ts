import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: flex;
    & > p {
      margin: auto 0;
      font-size: ${theme.fontSize.xs};
    }
  `,
  layoutAvatar: css`
    margin-right: 16px;
  `
}
