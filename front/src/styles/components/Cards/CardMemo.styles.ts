import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  memoWrapper: css`
    padding: 20px 24px;
    background-color: ${theme.color.bgGray};
    border-radius: 16px;
  `,
  memo: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      font-size: ${theme.fontSize.md};
    }
  `,
  title: css`
    flex-grow: 1;
    font-weight: bold;
    /* width: 70px; */
    text-align: start;
  `,
  item: css`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    gap: 4px;
    text-align: end;
    li > label {
      flex-grow: 1;
      line-height: 25px;
    }
  `,
  checkbox: css`
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0;
    background: #fff;
    border: 2px solid ${theme.color.gray};
    border-radius: 8px;
    -webkit-appearance: none;
    appearance: none;
    &:checked {
      background: ${theme.color.black};
      border: none;
      &::before,
      ::after {
        position: absolute;
        display: block;
        content: '';
        background: #fff;
        border-radius: 2px;
        transform: rotate(45deg);
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
