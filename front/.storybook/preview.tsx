import React from 'react'
import { Global } from '@emotion/react'
import type { Preview } from '@storybook/react'
import { globalStyle } from '../src/styles/globalStyle'
import { theme } from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'blue',
      values: [
        {
          name: 'blue',
          value: theme.color.bgBlue
        },
        {
          name: 'gray',
          value: theme.color.bgGray
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={globalStyle} />
        <Story />
      </>
    ),
  ]
}

export default preview