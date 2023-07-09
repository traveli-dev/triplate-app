import { ComponentPropsWithRef } from 'react'
import { styles } from '@/styles/components/Tabs/Tab.styles'

type TabProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  tabName: `tab-${number}`
  selectedTab: `tab-${number}`
  focusedTab: `tab-${number}`
  handleTabClick: (tabName: `tab-${number}`) => void
}

export const Tab = ({
  tabName,
  focusedTab,
  children,
  selectedTab,
  handleTabClick,
  ...props
}: TabProps) => {
  return (
    <button
      aria-controls={tabName}
      aria-selected={selectedTab === tabName}
      css={styles.tab}
      id={tabName}
      role="tab"
      tabIndex={focusedTab === tabName ? 0 : -1}
      onClick={() => handleTabClick(tabName)}
      {...props}
    >
      {children}
    </button>
  )
}
