import { theme } from '@/styles/theme'

// media query
type BreakpointType = typeof theme.breakpoint
type BreakpointKeyType = keyof BreakpointType

export const mq = (breakpointKey: BreakpointKeyType) => {
  const mediaQuery = `@media (max-width: ${theme.breakpoint[breakpointKey]})`
  return mediaQuery
}
