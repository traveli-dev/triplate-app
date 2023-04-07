import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <main css={styles.layout}>{children}</main>
}

const styles = {
  layout: css`
    position: relative;
    min-width: ${theme.breakpoint.sm};
    max-width: ${theme.breakpoint.md};
    min-height: 100vh;
    margin: 0 auto;
  `
}
