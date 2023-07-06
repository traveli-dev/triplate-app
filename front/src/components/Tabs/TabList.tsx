import { forwardRef } from 'react'
import { styles } from '@/styles/components/Tabs/TabList.styles'

type TabListProps = {
  children: React.ReactNode
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children }, ref) => {
    return (
      <div css={styles.tabListWrapper}>
        <div css={styles.tabList} ref={ref} role="tablist">
          {children}
        </div>
      </div>
    )
  }
)

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
TabList.displayName = 'TabList'
