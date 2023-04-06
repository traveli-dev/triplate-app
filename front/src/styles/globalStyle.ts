import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import 'modern-css-reset'

export const globalStyle = () => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', 'Meiryo', -apple-system, BlinkMacSystemFont, system-ui,
      sans-serif;
    line-height: 1.15;
    background-color: ${theme.color.bgGray};
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`
