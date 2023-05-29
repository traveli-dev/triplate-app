import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  button: (isFill: boolean) => css`
    /* 波紋の基点とするためrelativeを指定 */
    position: relative;
    width: 118px;
    height: 32px;
    /* はみ出す波紋を隠す */
    overflow: hidden;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${isFill ? theme.color.black : theme.color.white};
    cursor: pointer;
    background-color: ${isFill ? theme.color.white : theme.color.black};
    border: ${isFill ? '2px' : '0px'} solid ${theme.color.black};
    border-radius: 100px;

    transition: transform 0.1s;

    &:hover,
    &:focus {
      background-color: ${isFill ? theme.color.bgGray : theme.color.gray};
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
        transform: scale(0.95);
      }
    }
  `
}
