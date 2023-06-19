import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
// TODO:のちに他ボタンと統合
export const styles = {
  button: css`
    height: 28px;
    font-size: ${theme.fontSize.sm};
    font-weight: 300;
    color: ${theme.color.black};
    text-align: center;
    background-color: ${theme.color.gray100};
    border: 0;
    border-radius: 100px;
    & span[id='bold'] {
      font-weight: 600;
    }
  `,

  label_wrapper: css`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
  `
}
