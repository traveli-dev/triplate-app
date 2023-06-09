import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  formWrapper: css`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 176px);
  `,
  avatarWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
  `,
  avatarChangeButton: css`
    margin-top: 8px;
    font-size: ${theme.fontSize.md};
  `,
  layoutInput: css`
    padding-top: 16px;
  `,
  layoutSubmitButton: css`
    margin-top: 48px;
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
