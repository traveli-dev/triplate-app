import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layoutCardTravelink: css`
    margin-bottom: 16px;
  `,
  tabs: css`
    position: relative;
    width: 100%;
    height: 34px;
    margin-bottom: 16px;
    & input[type='radio'] {
      /* ラジオボタン消す */
      display: none;

      /* tab */
      @media screen and (prefers-reduced-motion: reduce) {
        & + span {
          display: inline-block;
          padding: 6px 12px;
          margin-right: 8px;
          font-size: ${theme.fontSize.md};
          color: ${theme.color.black};
          text-align: center;
          cursor: pointer;
          background-color: ${theme.color.white};
          border: 2px solid ${theme.color.outlineGray};
          border-radius: 100px;
          transition: none;

          &:hover,
          &:focus {
            background-color: ${theme.color.bgGray};
          }
        }
      }
      & + span {
        display: inline-block;
        padding: 6px 12px;
        margin-right: 8px;
        font-size: ${theme.fontSize.md};
        color: ${theme.color.black};
        text-align: center;
        cursor: pointer;
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.outlineGray};
        border-radius: 100px;
        transition: all 0.3s 0s ease;

        &:hover,
        &:focus {
          background-color: ${theme.color.bgGray};
        }
      }

      &:checked + span {
        color: ${theme.color.white};
        background-color: ${theme.color.black};
        border: 2px solid ${theme.color.black};
      }
    }
  `
}
