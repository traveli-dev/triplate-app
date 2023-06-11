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
}
