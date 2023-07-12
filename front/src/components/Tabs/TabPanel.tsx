import { styles } from '@/styles/components/Tabs/TabPanel.styles'

export type TabPanelProps = {
  children: React.ReactNode
  tabName: string
  panelName: string
  selectedTab: `tab-${string}`
  isFull?: boolean
  isPaddingNone?: boolean
  bgColor: 'white' | 'bgGray'
}

export const TabPanel = ({
  tabName,
  selectedTab,
  panelName,
  children,
  bgColor,
  ...options
}: TabPanelProps) => {
  return (
    <div
      aria-labelledby={tabName}
      css={styles.tabPanel({ bgColor, ...options })}
      hidden={selectedTab !== tabName}
      id={panelName}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  )
}
