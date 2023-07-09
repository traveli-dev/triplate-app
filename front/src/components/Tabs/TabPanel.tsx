import type { TabType } from '@/components/Tabs/TabList'
import { styles } from '@/styles/components/Tabs/TabPanel.styles'

type TabPanelProps = {
  panelName: string
  tabName: string
  children: React.ReactNode
  selectedTab: `tab-${string}`
  type: TabType
}

export const TabPanel = ({
  tabName,
  selectedTab,
  panelName,
  children,
  type
}: TabPanelProps) => {
  return (
    <div
      aria-labelledby={tabName}
      css={styles.tabPanel(type)}
      hidden={selectedTab !== tabName}
      id={panelName}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  )
}
