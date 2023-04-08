import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  tabs: css`
    position: relative;
    width: 100%;
    height: 44px;
    padding-left: 58px;
    background-color: ${theme.color.white};
    border-bottom: 2px solid ${theme.color.outlineGray};
    & input[type='radio'] {
      /* ラジオボタン消す */
      display: none;

      & + span {
        display: inline-block;
        width: 87px;
        height: 44px;
        margin-right: 8px;
        font-size: ${theme.fontSize.md};
        font-weight: 300;
        line-height: 46px;
        color: ${theme.color.gray};
        text-align: center;
        cursor: pointer;
        border-bottom: 2px solid ${theme.color.outlineGray};

        &:hover,
        &:focus {
          background-color: ${theme.color.bgBlue};
        }
      }

      &:checked + span {
        font-weight: 600;
        color: ${theme.color.blue};
        border-color: ${theme.color.blue};
      }
    }
  `
}
