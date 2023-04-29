import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

/* TODO:デザイン修正
ボタンの色、ホバーの色 */
export const styles = {
  button: css`
    ${buttonAnimation({ scale: 0.8, transition: '0.3s'})}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue};
    filter: drop-shadow(0 0 0.8px rgba(101, 119, 134, 0.2));
    border-radius: 100px;
    box-shadow: 0 1px 3px 1px rgba(101, 119, 134, 0.25);

    &:hover,
    &:focus {
      background-color: ${theme.color.hoverBlue};
    }
  `
}
