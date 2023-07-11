import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  heading1: css`
    margin: 24px 0;
    font-size: ${theme.fontSize.lg};
  `,
  layoutFloatingActionButton: css`
    position: fixed;
    right: 0;
    bottom: 104px;
    left: 669px;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    ${mq('md')} {
      right: 16px;
      bottom: 104px;
      left: auto;
    }
  `
}
