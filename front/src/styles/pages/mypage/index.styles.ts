import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  content: css`
    width: 400px;
    ${mq('sm')} {
      max-width: 300px;
    }
  `,
  user: css`
    padding: 32px 0;
    & > h1 {
      margin: 16px 0;
      font-size: ${theme.fontSize.lg};
    }
    & > p {
      margin: 16px 0;
      font-size: ${theme.fontSize.xs};
    }
  `
}
