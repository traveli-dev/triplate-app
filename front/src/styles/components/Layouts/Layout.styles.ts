import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  layout: css`
    position: relative;
    min-width: ${theme.breakpoint.sm};
    max-width: ${theme.breakpoint.md};
    min-height: 100vh;
    margin: 0 auto;
  `
}
