import { useRef, useState } from 'react'

export type TabName = `tab-${number}`
export const useTabState = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>('tab-1')
  const [focusedTab, setFocusedTab] = useState<TabName>('tab-1')
  const tabListRef = useRef<HTMLDivElement>(null)

  return {
    selectedTab,
    setSelectedTab,
    focusedTab,
    setFocusedTab,
    tabListRef
  }
}
