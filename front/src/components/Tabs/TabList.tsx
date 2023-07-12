import { forwardRef } from 'react'
import { styles } from '@/styles/components/Tabs/TabList.styles'

type TabListProps = {
  border?: boolean
  isSticky?: boolean
  withHeader?: boolean
  fitContent?: boolean
  children: React.ReactNode
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      children,
      border = false,
      isSticky = false,
      withHeader = false,
      fitContent = false
    },
    ref
  ) => {
    return (
      <div css={styles.tabListWrapper(border, isSticky, withHeader)}>
        <div css={styles.tabList(fitContent)} ref={ref} role="tablist">
          {children}
        </div>
      </div>
    )
  }
)

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
TabList.displayName = 'TabList'
