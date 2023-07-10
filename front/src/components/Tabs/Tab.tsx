import { styles } from '@/styles/components/Tabs/Tab.styles'

export type TabType = 'default' | 'two' | 'simple'

type TabProps = {
  children: React.ReactNode
  tabName: `tab-${number}`
  selectedTab: `tab-${number}`
  focusedTab: `tab-${number}`
  handleTabClick: (tabName: `tab-${number}`) => void
  type: TabType
}

export const Tab = ({
  tabName,
  focusedTab,
  children,
  selectedTab,
  handleTabClick,
  type
}: TabProps) => {
  return (
    <button
      aria-controls={tabName}
      aria-selected={selectedTab === tabName}
      css={styles.tab(type)}
      id={tabName}
      role="tab"
      tabIndex={focusedTab === tabName ? 0 : -1}
      onClick={() => handleTabClick(tabName)}
    >
      {children}
    </button>
  )
}
