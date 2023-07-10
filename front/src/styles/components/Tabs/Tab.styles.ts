import { css } from '@emotion/react'
import { TabType } from '@/components/Tabs'
import { theme } from '@/styles/theme'

export const styles = {
  tab: (type: TabType) => css`
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    width: ${(type === 'default' || type === 'simple') && '88px'}${type === 'two' && 'auto'};
    padding: ${(type === 'default' || type === 'two') && '12px'}${type === 'simple' && '64px 12px 12px 12px'};
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
        width: ${type === 'default' && '88px'}${type === 'simple' && '8px'} ${type === 'two' && '100%'};
        height: ${(type === 'default' || type === 'two') && '3px'}${type === 'simple' && '4px'};
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
        color: ${(type === 'default' || type === 'two') && theme.color.black}${type === 'simple' && theme.color.gray700};
        cursor: pointer;
        background-color: ${(type === 'default' || type === 'two') &&
          theme.color.bgGray}${type === 'simple' && theme.color.white};
      }
    }
  `
}
