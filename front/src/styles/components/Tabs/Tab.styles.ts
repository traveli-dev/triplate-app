import { css } from '@emotion/react'
import { TabType } from '@/components/Tabs/TabList'
import { theme } from '@/styles/theme'

export const styles = {
  tab: (type: TabType) => css`
    position: relative;
    flex-shrink: 0;
    border: none;
    background-color: ${theme.color.white};
    font-size: 14px;
    width: 88px;
    padding: ${type === 'triplink' ? '12px' : '64px 12px 12px 12px'};
    scroll-snap-align: start;

    &[aria-selected='true'] {
      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: ${type === 'triplink' ? '88px' : '8px'};
        height: ${type === 'triplink' ? '3px' : '4px'};
        border-radius: 4px;
        background-color: ${theme.color.black};
      }
      font-weight: bold;
    }
    &[aria-selected='false'] {
      &:hover {
        color: ${type === 'triplink' ? theme.color.black : theme.color.gray700};
        background-color: ${type === 'triplink'
          ? theme.color.bgGray
          : theme.color.white};
        cursor: pointer;
      }
    }
  `
}
