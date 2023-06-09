import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    width: 100%;
    padding: 16px;
    background-color: ${theme.color.white};
    border-radius: 16px;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
  `,
  label: css`
    height: 22px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.black};
  `,
  iconButton: css`
    width: 24px;
    height: 24px;
    padding: 0;
  `,
  layoutIconButton: css`
    margin-left: 16px;
  `,
  popUpWrapper: css`
    position: absolute;
    top: 60px;
    right: 16px;
    padding: 0px 12px 12px 12px;
    background-color: ${theme.color.white};
    border: 2px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  popUpButton: (type?: 'caution') => css`
    display: flex;
    align-items: center;
    margin-top: 12px;
    color: ${type === 'caution' && theme.color.pink};
  `,
  popUpText: css`
    width: 100%;
    margin-left: 16px;
    font-size: ${theme.fontSize.sm};
  `,
  input: css`
    padding: 11px 16px;
  `,
  inputItemWrapper: css`
    display: flex;
    align-items: center;
    margin-top: 12px;
  `,
  readonly: css`
    /* TODO:カラー調整する時に変数化 */
    background-color: #e1e1e1;
  `,
  hidden: css`
    /* 読み上げなし、フォームの送信は可能 */
    display: none;
  `,
  layoutInputItem: css`
    flex-grow: 1;
    margin-left: 16px;
  `
}
