import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  tabList: css`
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scroll-padding-inline: 32px;
    scroll-behavior: smooth;
  `,
  tabListWrapper: css`
    width: 100%;
    border-bottom: 2px solid ${theme.color.outlineGray};
  `
}
