import { useEffect } from 'react'
import { TabName, useTabState } from '@/hooks/tabs'

const getTabIndex = (tabName: TabName) => {
  const t = tabName.replace('tab-', '')
  const tabIndex = parseInt(t)
  return tabIndex
}

export const useTabNavigation = (tabLength: number) => {
  const { selectedTab, setSelectedTab, focusedTab, setFocusedTab, tabListRef } =
    useTabState()

  const scrollToTab = (tabName: TabName) => {
    const currentTabList = tabListRef.current as HTMLElement
    const tabIndex = getTabIndex(tabName)
    currentTabList.children[tabIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest'
    })
  }

  const handleTabClick = (tabName: `tab-${number}`) => {
    setSelectedTab(tabName)
    setFocusedTab(tabName)
    scrollToTab(tabName)
  }

  // focus
  useEffect(() => {
    const currentTabList = tabListRef.current as HTMLElement

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
      const nextFocusTab = currentTabList.children[tabIndex] as HTMLElement
      nextFocusTab.focus()
    }

    if (currentTabList) {
      currentTabList.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (currentTabList) {
        currentTabList.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [focusedTab])
  return {
    focusedTab,
    tabListRef,
    handleTabClick,
    selectedTab
  }
}
