// media query
const breakpoints = {
  sm: '32rem',
  md: '68rem'
} as const

type BreakpointsType = typeof breakpoints
type BreakpointKeysType = keyof BreakpointsType

export const mq = (breakpoint: BreakpointKeysType) => {
  const mediaQuery = `@media (max-width: ${breakpoints[breakpoint]})`
  return mediaQuery
}
