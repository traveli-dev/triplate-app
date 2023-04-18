import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  header: css`
    /* 下に続く要素が重ならないようにする */
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    min-width: ${theme.breakpoint.sm};
    max-width: ${theme.breakpoint.md};
    height: 56px;
    background-color: ${theme.color.white};
    border-bottom: 2px solid ${theme.color.bgGray};
  `,
  iconWrapper: css`
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${theme.color.black};
    text-decoration: none;
    background-color: ${theme.color.white};
    border-radius: 50%;
    transform: translateY(-50%);
    &:hover,
    &:focus {
      background-color: ${theme.color.bgGray};
    }
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.md};
    /* 56px(height) / 16px (font size) */
    line-height: 3.5;
    text-align: center;
  `
}
