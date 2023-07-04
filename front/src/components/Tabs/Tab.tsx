import { ComponentPropsWithRef, Dispatch, SetStateAction } from 'react'
import { styles } from '@/styles/components/Tabs/Tab.styles'

type TabProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  tabName: `tab-${number}`
  // tabIndex: number
  selectedTab: `tab-${number}`
  focusedTab: `tab-${number}`
  setSelectedTab: Dispatch<SetStateAction<`tab-${number}`>>
}

export const Tab = ({
  tabName,
  focusedTab,
  // tabIndex,
  children,
  selectedTab,
  setSelectedTab,
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
      onClick={() => setSelectedTab(tabName)}
      {...props}
    >
      {children}
    </button>
  )
}
