import { styles } from '@/styles/components/Layouts/Layout.styles'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <main css={styles.layout}>{children}</main>
}
