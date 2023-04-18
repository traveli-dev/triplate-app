import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  overlay: (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68rem;
    pointer-events: ${isOpen ? 'auto' : 'none'};
    background-color: rgba(0, 0, 0, 0.25);
    opacity: ${isOpen ? 1 : 0};
    transition: opacity ease-out 0.3s;
    ${mq('sm')} {
      right: 0;
      left: 0;
    }
  `,
  content: (isOpen: boolean) => css`
    position: fixed;
    bottom: 0;
    z-index: 1000;
    box-sizing: border-box;
    width: 100%;
    max-width: ${theme.breakpoint.md};
    padding: 32px 30px;
    margin: 0;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
    transition: transform ease-out 0.3s;
    transform: ${isOpen ? 'translateY(0)' : 'translateY(100%)'};
  `,
  closeButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${theme.color.black};
    text-align: right;
    cursor: pointer;
    background-color: ${theme.color.white};
    border: 0;
    border-radius: 50%;

    /* 本来は:focusも一緒につけた方がいいけど，focus-trapでモーダル開いた時に直近の要素にfocusが当たる（ばつボタンにfocusのstyleが当たる）のがなんか微妙なのでstyleは当てないようにした */
    /* stylelint-disable-next-line  a11y/selector-pseudo-class-focus */
    &:hover {
      background-color: ${theme.color.bgGray};
    }
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
  `,
  title: css`
    font-size: ${theme.fontSize.lg};
    color: ${theme.color.black};
  `
}
