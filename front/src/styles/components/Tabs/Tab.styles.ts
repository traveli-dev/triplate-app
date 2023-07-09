import { css } from '@emotion/react'
import { TabType } from '@/components/Tabs/TabList'
import { theme } from '@/styles/theme'

export const styles = {
  tab: (type: TabType) => css`
    position: relative;
    flex-shrink: 0;
    width: 88px;
    padding: ${type === 'triplink' ? '12px' : '64px 12px 12px 12px'};
    font-size: ${theme.fontSize.sm};
    background-color: ${theme.color.white};
    border: none;
    scroll-snap-align: start;

    &[aria-selected='true'] {
      &::after {
        position: absolute;
        right: 0;
        bottom: 0px;
        left: 0;
        width: ${type === 'triplink' ? '88px' : '8px'};
        height: ${type === 'triplink' ? '3px' : '4px'};
        margin: 0 auto;
        content: '';
        background-color: ${theme.color.black};
        border-radius: 4px;
      }
      font-weight: bold;
    }
    &[aria-selected='false'] {
      &:hover,
      &:focus {
        color: ${type === 'triplink' ? theme.color.black : theme.color.gray700};
        cursor: pointer;
        background-color: ${type === 'triplink'
          ? theme.color.bgGray
          : theme.color.white};
      }
    }
  `
}
