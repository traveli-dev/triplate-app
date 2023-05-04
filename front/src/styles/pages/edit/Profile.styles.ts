import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  profileWrapper: css`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 176px);
    margin-bottom: 48px;
  `,
  image: css`
    display: flex;
    justify-content: center;
    padding-top: 34px;
  `,
  labelWrapper: css`
    margin-top: 32px;
  `,
  label: css`
    display: block;
    margin-bottom: 16px;
    font-size: ${theme.fontSize.md};
  `,
  layoutInput: css`
    margin-top: 6px;
  `,
  inputLink: css`
    margin-bottom: 16px;
  `
}
