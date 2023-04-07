import { css } from '@emotion/react'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    ${mq('sm')} {
      max-width: 300px;
    }
  `,
  column: css`
    display: flex;
    flex-direction: column;
    gap: 3vh;
  `
}
