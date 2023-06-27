import { css, keyframes } from '@emotion/react'
import { theme } from '@/styles/theme'

export const animations = {
  bounceInDown: keyframes`  
        from {
          transform: translate3d(0, -3000px, 0);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        60% {
          transform: translate3d(0, 25px, 0);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        }
        75% {
          transform: translate3d(0, -10px, 0);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        }
        90% {
          transform: translate3d(0, 5px, 0);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        }
        to {
          transform: none;
                    

        }`,
  bounceOutDown: keyframes`
       20% {
          transform: translate3d(0, 10px, 0);
        }
        40% {
          transform: translate3d(0, -20px, 0);
        }
        to {
              transform: translate3d(0, -1000px, 0);
        }
  `,
}

export const styles = {
  toastWrapper: (type: string, visible: boolean) => css`
    
    animation: ${animations.bounceInDown} 0.5s ease-out 0s forwards;

    position: fixed;
    top: 60px;
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
    visibility: ${visible ? "visible" : "hidden"};
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
