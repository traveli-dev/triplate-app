import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  tab: css`
    position: relative;
    flex-shrink: 0;
    border: none;
    background-color: ${theme.color.white};
    font-size: 14px;
    width: 88px;
    padding: 12px;
    scroll-snap-align: start;

    &[aria-selected='true'] {
      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 88px;
        height: 3px;
        border-radius: 3px;
        background-color: ${theme.color.black};
      }
      font-weight: bold;
    }
    &[aria-selected='false'] {
      &:hover {
        background-color: ${theme.color.bgGray};
        cursor: pointer;
      }
    }
  `
}
