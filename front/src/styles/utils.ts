import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

// media query
type BreakpointType = typeof theme.breakpoint
type BreakpointKeyType = keyof BreakpointType

export const mq = (breakpointKey: BreakpointKeyType) => {
  const mediaQuery = `@media (max-width: ${theme.breakpoint[breakpointKey]})`
  return mediaQuery
}

type ButtonAnimationType = {
  // 値が低いほどより小さく押し込まれれる 0 ~ 1
  scale: number
  // seconds
  transition: `${string}s`
}
// 波紋と押し込めるやつ
export const buttonAnimation = ({ scale, transition }: ButtonAnimationType) => css`
  /* 波紋の基点とするためrelativeを指定 */
  position: relative;
  /* はみ出す波紋を隠す */
  overflow: hidden;
  transition: transform ${transition};
  /* 波紋 */
  @media screen and (prefers-reduced-motion: reduce) {
  &::after {
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

/* 波紋 */
    &::after {
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
        transform: scale(${scale});
      }
    }
`