import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 56px);
  `,
  label: css`
    display: block;
    padding-top: 16px;
    font-size: ${theme.fontSize.md};
    color: ${theme.color.black};
  `,
  layoutInput: css`
    margin-top: 8px;
  `,
  layoutButton: css`
    position: absolute;
    bottom: 32px;
    width: inherit;
  `
}
