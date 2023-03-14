import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <main className={styles.layout}>{children}</main>
}
