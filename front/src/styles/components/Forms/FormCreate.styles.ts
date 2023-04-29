import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  formWrapper: css`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 176px);
  `,
  label: css`
    display: block;
    padding-top: 16px;
    font-size: ${theme.fontSize.md};
  `,
  layoutInput: css`
    margin-top: 8px;
  `,
  layoutButton: css`
    padding: 32px 0;
  `
}
