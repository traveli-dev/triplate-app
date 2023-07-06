import { ComponentPropsWithRef, Dispatch, SetStateAction } from 'react'
import { styles } from '@/styles/components/Tabs/Tab.styles'

type TabProps = ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  tabName: `tab-${number}`
  selectedTab: `tab-${number}`
  focusedTab: `tab-${number}`
  scrollToTab: (tabName: `tab-${number}`) => void
  setSelectedTab: Dispatch<SetStateAction<`tab-${number}`>>
}

export const Tab = ({
  tabName,
  focusedTab,
  children,
  selectedTab,
  setSelectedTab,
  scrollToTab,
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
      onClick={() => {
        setSelectedTab(tabName)
        scrollToTab(tabName)
      }}
      {...props}
    >
      {children}
    </button>
  )
}
