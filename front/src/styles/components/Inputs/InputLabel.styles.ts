import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  label: css`
    display: block;
    padding-top: 16px;
    font-size: ${theme.fontSize.md};
  `,
  subText: css`
    margin-left: 16px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `,
  childrenWrapper: css`
    margin-top: 8px;
  `
}
