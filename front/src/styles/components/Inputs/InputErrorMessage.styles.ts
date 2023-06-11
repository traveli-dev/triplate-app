import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: flex;
    align-items: flex-start;
    color: ${theme.color.red};
  `,
  icon: css`
    flex-shrink: 0;
    margin-right: 8px;
  `,
  message: css`
    margin-top: 1px;
    font-size: ${theme.fontSize.sm};
    line-height: 20px;
  `
}
