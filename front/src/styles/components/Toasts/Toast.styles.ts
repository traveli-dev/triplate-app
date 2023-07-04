import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  toastWrapper: (type: string, visible: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    column-gap: 16px;
    align-content: center;
    width: 100%;
    height: fit-content;
    padding: 8px 16px;
    border-radius: 8px;
    opacity: ${visible ? 1 : 0};
    transition: transform ease 0.3s, opacity ease 0.3s;
    transform: ${visible ? 'translateY(60px)' : 'translateY(-30px)'};
    ${type == 'success' &&
    css`
      color: ${theme.color.toastGreen};
      background-color: ${theme.color.toastBgGreen};
      border: 2px solid ${theme.color.toastGreen};
    `}
    ${type == 'error' &&
    css`
      color: ${theme.color.toastRed};
      background-color: ${theme.color.toastBgRed};
      border: 2px solid ${theme.color.toastRed};
    `}
  `,
  iconWrapper: css`
    width: 24px;
    height: 24px;
    margin: auto 0;
  `,
  text: css`
    width: calc(100% - 40px);
    margin: auto 0;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    overflow-wrap: break-word;
  `
}
