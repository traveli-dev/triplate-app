import { styles } from '@/styles/components/Tabs/TabPanel.styles'

type TabPanelProps = {
  panelName: string
  tabName: string
  children: React.ReactNode
  selectedTab: `tab-${string}`
}

export const TabPanel = ({
  tabName,
  selectedTab,
  panelName,
  children
}: TabPanelProps) => {
  return (
    <div
      aria-labelledby={tabName}
      css={styles.tabPanel}
      hidden={selectedTab !== tabName}
      id={panelName}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  )
}
