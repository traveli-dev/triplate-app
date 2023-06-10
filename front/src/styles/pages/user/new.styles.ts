import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutForm: css`
    padding: 38px 0;
  `,
  cancelButton: css`
    display: block;
    margin: 16px auto;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.gray};
    &:hover,
    &:focus {
      color: ${theme.color.hoverBlack};
    }
  `,
  kv: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 0 auto 38px auto;
    font-size: ${theme.fontSize.xl};
    background-color: ${theme.color.bgGray};
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
    margin-bottom: 12px;
    img {
      margin-right: 16px;
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
