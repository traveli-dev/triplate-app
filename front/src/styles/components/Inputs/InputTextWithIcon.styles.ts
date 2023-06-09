import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  inputWrapper: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    padding: 8px 16px;
    background-color: ${theme.color.bgGray};
    border-radius: 100px;

    :focus,
    :hover {
      outline: 2px solid ${theme.color.outlineGray};
    }
  `,
  icon: css`
    width: 20px;
    height: 20px;
  `,
  input: css`
    width: 100%;
    margin-left: 8px;
    font-size: ${theme.fontSize.md};
    color: ${theme.color.black};
    background-color: ${theme.color.bgGray};
    border: 0;

    :focus,
    :hover {
      outline: 2px solid ${theme.color.bgGray};
    }
  `
}
