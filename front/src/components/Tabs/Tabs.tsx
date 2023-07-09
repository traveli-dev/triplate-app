import { styles } from '@/styles/components/Tabs/Tabs.styles'

type TabsProps = {
  children: React.ReactNode
}

export const Tabs = ({ children }: TabsProps) => {
  return <div css={styles.tabs}>{children}</div>
}
