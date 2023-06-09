// TODO: 設定作成時に作りなおす
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  toggleSwitch: css`
    @media screen and (prefers-reduced-motion: reduce) {
      .toggle-button-001 {
        position: relative;
        display: inline-block;
        width: 38px;
        height: 20px;
        cursor: pointer;
        background-color: ${theme.color.bgGray};
        border-radius: 100px;
        transition: none;
      }
    }

    .toggle-button-001 {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 20px;
      cursor: pointer;
      background-color: ${theme.color.bgGray};
      border-radius: 100px;
      transition: background-color 0.4s;
    }

    .toggle-button-001:has(:checked) {
      background-color: ${theme.color.blue};
    }

    @media screen and (prefers-reduced-motion: reduce) {
      .toggle-button-001::after {
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

    .toggle-button-001::after {
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

    .toggle-button-001:has(:checked)::after {
      left: 19px;
    }

    .toggle-button-001 input {
      display: none;
    }
  `
}
