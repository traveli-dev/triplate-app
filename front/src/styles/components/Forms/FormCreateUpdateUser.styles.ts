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
  layoutSubmitButton: css`
    margin-top: 74px;
  `,
  userIdWrapper: css`
    display: flex;
    align-items: center;
    span {
      margin-right: 8px;
      font-size: ${theme.fontSize.sm};
      color: ${theme.color.gray};
    }
  `
}
