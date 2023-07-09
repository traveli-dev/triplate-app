import { css } from '@emotion/react'
import type { TabType } from '@/components/Tabs/TabList'
import { theme } from '@/styles/theme'

export const styles = {
  tabList: css`
    display: flex;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 32px;
    scroll-behavior: smooth;
  `,
  tabListWrapper: (type: TabType) => css`
    width: 100%;
    border-bottom: ${type === 'triplink' ? '2px' : '0px'} solid
      ${theme.color.outlineGray};
  `
}
