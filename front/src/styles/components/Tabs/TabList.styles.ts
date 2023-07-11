import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  tabList: (fitContent: boolean) => css`
    display: flex;
    width: ${fitContent ? 'fit-content' : 'auto'};
    max-width: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 32px;
    scroll-behavior: smooth;
  `,
  tabListWrapper: (
    border: boolean,
    isSticky: boolean,
    withHeader: boolean
  ) => css`
    position: ${isSticky ? 'sticky' : 'static'};
    top: ${withHeader ? '56px' : 0};
    z-index: 99;
    width: 100%;
    background-color: ${theme.renewalColor.white};
    border-bottom: ${border ? '2px' : '0px'} solid ${theme.color.outlineGray};
  `
}
