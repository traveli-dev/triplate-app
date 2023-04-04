import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import 'normalize.css'

export const globalStyle = () => css`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.color.bgGray};
    font-family: 'Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', 'Meiryo', -apple-system, BlinkMacSystemFont, system-ui,
      sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`
