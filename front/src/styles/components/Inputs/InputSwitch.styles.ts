// TODO: 設定作成時に作りなおす
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
  `,
  checkbox: css`
    position: relative;
    display: inline-block;
    width: 38px;
    height: 20px;
    margin-right: 16px;
    cursor: pointer;
    background-color: ${theme.color.bgGray};
    border-radius: 100px;
    transition: background-color 0.4s;

    &::after {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 18px;
      height: 18px;
      content: '';
      background-color: ${theme.color.white};
      border-radius: 100%;
      transition: left 0.2s;
    }

    &:has(:checked) {
      background-color: ${theme.color.black};
    }

    &:has(:checked)::after {
      left: 19px;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 20px;
      cursor: pointer;
      background-color: ${theme.color.bgGray};
      border-radius: 100px;
      transition: none;

      &::after {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        content: '';
        background-color: ${theme.color.white};
        border-radius: 100%;
        transition: none;
      }
    }
  `,
  disable: css`
    display: none;
  `,
  text: css`
    font-size: ${theme.fontSize.md};
    width: 100%;
  `
}
