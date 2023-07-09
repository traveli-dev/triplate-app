import { useRef, useState, useEffect } from 'react'

type TabName = `tab-${number}`

const getTabIndex = (tabName: TabName) => {
  const t = tabName.replace('tab-', '')
  const tabIndex = parseInt(t)
  return tabIndex
}

export const useTabNavigation = (tabLength: number) => {
  const [selectedTab, setSelectedTab] = useState<TabName>('tab-0')
  const [focusedTab, setFocusedTab] = useState<TabName>('tab-0')
  const tabListRef = useRef<HTMLDivElement>(null)

  const scrollToTab = (tabName: TabName) => {
    if (tabListRef.current === null) return

    const currentTabList = tabListRef.current
    const tabIndex = getTabIndex(tabName)
    currentTabList.children[tabIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest'
    })
  }

  const handleTabClick = (tabName: TabName) => {
    setSelectedTab(tabName)
    setFocusedTab(tabName)
    scrollToTab(tabName)
  }

  // focus
  useEffect(() => {
    if (tabListRef.current === null) return

    const currentTabList = tabListRef.current

    const handleKeyDown = (e: KeyboardEvent) => {
      let tabIndex = getTabIndex(focusedTab)

      if (e.key === 'ArrowLeft') {
        if (tabIndex >= 1) tabIndex--
        // TODO: タブがループした時スクロールも一緒にするように
      } else if (e.key === 'ArrowRight') {
        if (tabIndex < tabLength - 1) tabIndex++
        // TODO: タブがループした時スクロールも一緒にするように
      }

      setFocusedTab(`tab-${tabIndex}`)
      const nextFocusTab = currentTabList.children[tabIndex]
      if (nextFocusTab instanceof HTMLButtonElement) {
        nextFocusTab.focus()
      }
    }

    currentTabList.addEventListener('keydown', handleKeyDown)
    return () => {
      currentTabList.removeEventListener('keydown', handleKeyDown)
    }
  }, [focusedTab, tabListRef])
  return {
    focusedTab,
    tabListRef,
    handleTabClick,
    selectedTab
  }
}
