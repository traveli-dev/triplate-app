import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  heading1: css`
    padding: 24px 0;
    font-size: ${theme.fontSize.lg};
  `,
  layoutFloatingActionButton: css`
    position: fixed;
    width: 64px;
    height: 64px;
    bottom: 104px;
    left: 669px;
    right: 0;
    margin: 0 auto;
    ${mq('md')} {
      bottom: 104px;
      left: auto;
      right: 16px;
    }
  `
}
