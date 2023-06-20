import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  formWrapper: css`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 176px);
  `,
  layoutInput: css`
    padding-top: 16px;
  `,
  layoutButton: css`
    padding: 32px 0;
  `,
  label: css`
    font-size: ${theme.fontSize.md};
    font-weight: 300;
  `,
  layoutSwitch: css`
    margin-top: 16px;
  `,
  layoutErrorMessage: css`
    margin-top: 4px;
  `
}
