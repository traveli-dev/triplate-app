import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type IndProps = {
  active: number
}

const calcLeft = (num: number) => {
  const left = 91 * (num - 1)
  return left
}

export const styles = {
  device: css`
    display: flex;
    flex-direction: column;
    width: 68rem;
    height: calc(100% - 339px);
    min-height: 100px;
    overflow: hidden;
    background-color: ${theme.color.bgGray};
  `,
  snapTabs: css`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  header: css`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: fit-content;
  `,
  section: css`
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    height: 100%;
    article {
      scroll-snap-align: start;
      overflow-y: auto;
      overscroll-behavior-y: contain;
    }
  `,
  scrollSnapX: css`
    overflow: auto hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;

    @media (hover: none) {
      scrollbar-width: none;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  `,
  nav: css`
    position: relative;
    display: flex;
    margin: 0 auto;
    & a {
      align-items: center;
      min-width: 91px;
      height: 28px;
      font-size: ${theme.fontSize.md};
      color: ${theme.color.black};
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      background-color: white;
      scroll-snap-align: start;
    }
  `,
  navIndicator: ({ active }: IndProps) => css`
    position: absolute;
    bottom: 0;
    left: ${calcLeft(active)}px;
    width: 91px;
    height: 3px;
    background: ${theme.color.black};
    border-radius: 2px;
    transition: left 0.3s ease-out;
  `,
  active: css`
    font-weight: bold;
  `
}
