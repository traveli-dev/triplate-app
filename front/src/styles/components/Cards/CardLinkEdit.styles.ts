import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    width: 100%;
    height: 252px;
    padding: 16px;
    background-color: ${theme.color.white};

    border-radius: 16px;
  `,
  head: css`
    display: flex;
    justify-content: space-between;
  `,
  label: css`
    height: 22px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.black};
  `,
  menuButton: css`
    width: 24px;
    height: 24px;
  `,

  inputWrapper: css`
    margin-top: 8px;
    margin-bottom: 16px;
  `,
  inputLink: css`
    margin-bottom: 16px;
  `,
  inputTime: css`
    display: flex;
    gap: 200px;
    align-items: center;
    margin-top: 16px;
  `,
  inputMemo: css`
    display: flex;
    gap: 11px;
    align-items: center;
    margin-top: 16px;
  `,
  initButton: css`
    width: 24px;
    height: 24px;
  `,
  inputWithX: css`
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  `,

  foot: css`
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: ${theme.fontSize.md};
  `
}

export const link = css`
  height: 300px !important;
`
