import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: flex;
    align-items: top;
    color: ${theme.color.red};
  `,
  icon: css`
    flex-shrink: 0;
    margin-right: 8px;
  `,
  message: css`
    font-size: ${theme.fontSize.sm};
    line-height: 20px;
  `
}
