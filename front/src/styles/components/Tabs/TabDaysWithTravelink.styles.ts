import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    min-height: 100px;
    height: calc(100% - 339px);
    position: relative;
    overflow: hidden;
    background-color: ${theme.color.bgBlue};
  `,
  tabs: css`
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    background-color: ${theme.color.white};
    scroll-behavior: smooth;
  `,
  tabSwitch: css`
    display: none;
    &:checked {
      background-color: aqua;

      & + label {
        font-weight: bold;
        color: ${theme.color.blue};
        & + div {
          order: 1;
          height: auto;
          pointer-events: auto;
          opacity: 1;
          transform: translateX(0);
        }
      }
      & ~ label::after {
        transform: translateX(-100%);
      }
      & + label::after {
        opacity: 1;
        transform: translateX(0);
      }
      & ~ div {
        transform: translateX(30%);
      }
    }
  `,
  tabLabel: css`
    position: relative;
    flex: 1;
    order: -1;
    height: 42px;
    padding: 0 32px;
    font-size: ${theme.fontSize.md};
    line-height: 42px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    -webkit-tap-highlight-color: transparent;

    &:hover,
    &:focus {
      background: ${theme.color.bgBlue};
      ${mq('sm')} {
        background: none;
      }
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      display: block;
      width: 100%;
      height: 3px;
      pointer-events: none;
      content: '';
      background: ${theme.color.blue};
      opacity: 0;
      transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s 80ms;
      transform: translateX(100%);
    }
  `,
  tabContent: css`
    position: absolute;
    top: 42px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    pointer-events: none;
    background-color: ${theme.color.bgBlue};
    opacity: 0;
    transition: transform 0.3s 80ms, opacity 0.3s 80ms;
    transform: translateX(-30%);
  `
}
