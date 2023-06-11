import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutForm: css`
    padding: 40px 0 64px 0;
  `,
  layoutErrorMessage: css`
    margin-top: 4px;
  `,
  avatarWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  `,
  avatarChangeButton: css`
    margin-top: 8px;
    font-size: ${theme.fontSize.md};
    &:hover,
    &:focus {
      color: ${theme.color.hoverBlack};
    }
  `,
  layoutInput: css`
    padding-top: 16px;
  `,
  layoutSubmitButton: css`
    margin-top: 48px;
  `,
  snsInput: css`
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
    }
    span {
      margin-right: 8px;
      font-size: ${theme.fontSize.sm};
      color: ${theme.color.gray};
    }
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
