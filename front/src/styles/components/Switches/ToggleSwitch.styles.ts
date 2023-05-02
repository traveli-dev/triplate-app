import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  toggleSwitch: css`
    display: table;

    input {
      display: none;
    }

    label {
      position: relative;
      display: block;
      width: 38px;
      height: 20px;
      cursor: pointer;
      background-color: ${theme.color.bgGray};
      border-radius: 100px;
    }
    input:checked + label {
      background-color: ${theme.color.blue};
    }

    @media screen and (prefers-reduced-motion: reduce) {
      label::before {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        content: '';
        background-color: ${theme.color.white};
        border-radius: 100px;
        transition: none;
      }
    }

    label::before {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 18px;
      height: 18px;
      content: '';
      background-color: ${theme.color.white};
      border-radius: 100px;
      transition: 0.2s;
    }
    input:checked + label::before {
      left: 19px;
    }
  `
}
