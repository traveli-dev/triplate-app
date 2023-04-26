import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    min-width: 52px;
    text-align: center;
    background-color: ${theme.color.white};
    border: 0;

    &:hover,
    &:focus {
      color: ${theme.color.blue};
      ${mq('sm')} {
        color: ${theme.color.black};
      }
    }
    &:active {
      color: ${theme.color.blue};
    }

    span {
      display: block;
      margin: 6px 0 0 0;
      font-size: ${theme.fontSize.xs};
    }
  `
}
