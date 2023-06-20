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
    color: ${theme.color.black};
    background-color: ${theme.color.bgGray};
  }

  a {
    color: ${theme.color.black};
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }

  select {
    cursor: pointer;
    border: 0;
    outline: 0;
    box-shadow: none;
    appearance: none;
  }

  button {
    padding: 0;
    color: ${theme.color.black};
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  label {
    cursor: pointer;
  }
`
