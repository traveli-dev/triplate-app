import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <main css={LayoutStyle}>{children}</main>
}

const LayoutStyle = css`
  max-width: ${theme.breakpoint.md};
  min-width: ${theme.breakpoint.sm};
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`
