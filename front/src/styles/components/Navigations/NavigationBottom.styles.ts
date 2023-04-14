import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    position: fixed;
    bottom: 0;
    z-index: 100;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.breakpoint.md};
    height: 80px;
    padding: 0 48px;
    margin: 0;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.outlineGray};
    border-bottom: 0;
    border-radius: 32px 32px 0 0;
  `,
  nav: css`
    width: 100%;
    font-size: ${theme.fontSize.sm};
    text-align: center;
    list-style: none;
    p {
      margin: 4px 0 0;
    }
  `,
  navItem: css`
    color: ${theme.color.black};
    text-decoration: none;
  `,
  focus: css`
    font-weight: 700;
  `
}
