import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <Main>{children}</Main>
}

const Main = styled.main`
  max-width: ${theme.breakpoint.md};
  min-width: ${theme.breakpoint.sm};
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`
