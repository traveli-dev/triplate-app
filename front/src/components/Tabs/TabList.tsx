import { forwardRef } from 'react'
import { styles } from '@/styles/components/Tabs/TabList.styles'

type TabListProps = {
  border?: boolean
  fitContent?: boolean
  children: React.ReactNode
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, border = false, fitContent = false }, ref) => {
    return (
      <div css={styles.tabListWrapper(border)}>
        <div css={styles.tabList(fitContent)} ref={ref} role="tablist">
          {children}
        </div>
      </div>
    )
  }
)

// https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
TabList.displayName = 'TabList'
