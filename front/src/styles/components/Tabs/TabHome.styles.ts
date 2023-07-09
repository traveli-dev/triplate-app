import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  grid: (isGrid: boolean) => css`
    display: grid;
    grid-template-columns: ${isGrid ? '1fr 1fr 1fr' : '1fr'};
    gap: 32px 16px;
    width: 100%;
    ${mq('sm')} {
      grid-template-columns: ${isGrid ? '1fr 1fr' : '1fr'};
    }
  `,
  layoutCardTriplink: css`
    margin-bottom: 32px;
  `,
  tabsWrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  buttonGrid: css`
    color: ${theme.renewalColor.black};
    background-color: ${theme.renewalColor.white};
    padding: 8px;
    border-radius: 100px;
    border: none;
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
    }
    &:focus {
      background-color: ${theme.renewalColor.white};
    }
  `,
  tabs: css`
    position: relative;
    width: 100%;
    height: 34px;
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
          text-align: center;
          cursor: pointer;
          background-color: ${theme.renewalColor.white};
          border: 2px solid ${theme.renewalColor.borderGray};
          border-radius: 100px;
          transition: none;

          &:hover,
          &:focus {
            background-color: ${theme.renewalColor.hoverGray};
          }
        }
      }
      & + span {
        display: inline-block;
        padding: 6px 12px;
        margin-right: 8px;
        font-size: ${theme.fontSize.md};
        text-align: center;
        cursor: pointer;
        background-color: ${theme.renewalColor.white};
        border: 2px solid ${theme.renewalColor.borderGray};
        border-radius: 100px;
        transition: all 0.3s 0s ease;

        &:hover,
        &:focus {
          background-color: ${theme.renewalColor.hoverGray};
        }
      }

      &:checked + span {
        color: ${theme.renewalColor.white};
        background-color: ${theme.renewalColor.black};
        border: 2px solid ${theme.renewalColor.black};
      }
    }
  `
}
