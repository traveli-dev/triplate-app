import { css } from '@emotion/react'
import type { TabType } from '@/components/Tabs/TabList'
import { theme } from '@/styles/theme'

export const styles = {
  tabPanel: (type: TabType) => css`
    background-color: ${type === 'triplink'
      ? theme.color.bgGray
      : theme.color.white};
    padding: ${type === 'triplink' ? '16px' : '16px 0'};
  `
}
