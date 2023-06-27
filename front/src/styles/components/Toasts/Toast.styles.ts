import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  toastWrapper: (type: string, visible: boolean) => css`
    
    transition: transform ease-out 0.3s, opacity ease-out 0.3s;
    transform: ${visible ? 'translateY(0)' : 'translateY(-60px)'};
    position: fixed;
    top: 0px;
    z-index: 1000;
    display: flex;
    column-gap: 16px;
    align-content: center;
    width: 100%;
    height: fit-content;
    padding: 8px 16px;
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
      border-radius: 8px;

    opacity: ${visible ? 1 : 0};
    // 『opacity 0』だと非表示でもイベントが発行されるので、visibilityを追加して非表示の際にイベントが発行されないようにする
    //visibility: ${visible ? "visible" : "hidden"};
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
