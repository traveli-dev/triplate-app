import { css } from '@emotion/react'
import { TabPanelProps } from '@/components/Tabs/TabPanel'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

type optional = 'children' | 'tabName' | 'panelName' | 'selectedTab'
type TabPanelStyleType = Omit<TabPanelProps, optional>
type BgColorType = Pick<TabPanelStyleType, 'bgColor'>

const setBgColor = ({ bgColor }: BgColorType) => {
  if (bgColor === 'white') return theme.color.white
  else if (bgColor === 'bgGray') return theme.color.bgGray
}

export const styles = {
  tabPanel: ({ bgColor, isFull, isPaddingNone }: TabPanelStyleType) => css`
    min-height: ${isFull ? 'calc(100vh - 44px)' : 'auto'};
    ${mq('sm')} {
      /* tabの高さ: 44px */
      min-height: ${isFull ? 'calc(100vh + 44px)' : 'auto'};
    }
    padding: ${isPaddingNone ? '0' : '16px'};
    background-color: ${setBgColor({ bgColor })};
  `
}
