import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

/* TODO:デザイン修正
ボタンの色、ホバーの色 */
export const styles = {
  button: css`
    /* 波紋の基点とするためrelativeを指定 */
    position: relative;
    width: 64px;
    height: 64px;
    /* はみ出す波紋を隠す */
    overflow: hidden;
    color: ${theme.color.white};
    cursor: pointer;
    background-color: ${theme.color.blue};
    filter: drop-shadow(0 0 0.8px rgba(101, 119, 134, 0.2));
    border: 0;
    border-radius: 100px;
    box-shadow: 0 1px 3px 1px rgba(101, 119, 134, 0.25);
    transition: transform 0.3s;

    &:hover,
    &:focus {
      background-color: ${theme.color.hoverBlue};
    }

    @media screen and (prefers-reduced-motion: reduce) {
      &::after {
        /* 波紋 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat
          50%;
        opacity: 0;
        transition: none;
        transform: scale(10, 10);
      }
    }

    &::after {
      /* 波紋 */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat
        50%;
      opacity: 0;
      transition: transform 0.3s, opacity 1s;
      transform: scale(10, 10);
    }

    @media screen and (prefers-reduced-motion: reduce) {
      &:active::after {
        opacity: 0.3;
        transition: none;
        transform: scale(0, 0);
      }
    }

    &:active::after {
      opacity: 0.3;
      transition: 0s;
      transform: scale(0, 0);
    }

    ${mq('sm')} {
      &:active {
        transform: scale(0.8);
      }
    }
  `
}
