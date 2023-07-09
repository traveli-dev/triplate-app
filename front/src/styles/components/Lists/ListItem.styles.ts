import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  listItemWrapper: css`
    a {
      padding: 16px;
      display: block;
    }
    background-color: ${theme.renewalColor.white};
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
      ${mq('sm')} {
        background-color: ${theme.renewalColor.white};
      }
    }
  `,
  item: css`
    display: flex;
    gap: 16px;
    align-items: center;
    span {
      display: block;
      font-size: ${theme.fontSize.md};
      width: 100%;
    }
  `
}
