import { forwardRef } from 'react'
import { styles } from '@/styles/components/Tabs/TabList.styles'

export type TabType = 'triplink' | 'triplate'

type TabListProps = {
  children: React.ReactNode
  type: TabType
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, type }, ref) => {
    return (
      <div css={styles.tabListWrapper(type)}>
        <div css={styles.tabList} ref={ref} role="tablist">
          {children}
        </div>
      </div>
    )
  }
)

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
TabList.displayName = 'TabList'
