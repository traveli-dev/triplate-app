import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  memoWrapper: css`
    background-color: ${theme.color.bgGray};
    border-radius: 16px;
    padding: 20px 24px;
  `,
  memo: css`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      display: flex;
      font-size: ${theme.fontSize.md};
    }
  `,
  title: css`
    font-weight: bold;
    /* width: 70px; */
    text-align: start;
    flex-grow: 1;
  `,
  item: css`
    flex-grow: 2;
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: 4px;
    li > label {
      flex-grow: 1;
      line-height: 25px;
    }
  `,
  checkbox: css`
    position: relative;
    height: 25px;
    width: 25px;
    display: inline-block;
    border-radius: 8px;
    border: 2px solid ${theme.color.gray};
    background: #fff;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    &:checked {
      border: none;
      background: ${theme.color.black};
      &::before,
      ::after {
        display: block;
        content: '';
        position: absolute;
        border-radius: 2px;
        transform: rotate(45deg);
        background: #fff;
      }
      &::before {
        bottom: 9px;
        left: 6px;
        width: 6px;
        height: 3px;
      }
      &::after {
        bottom: 6px;
        left: 13px;
        width: 3px;
        height: 12px;
      }
    }
  `
}
