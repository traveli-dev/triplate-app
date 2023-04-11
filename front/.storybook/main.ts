import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/stories/cores',
      titlePrefix: 'Cores'
    },
    {
      directory: '../src/stories/components',
      titlePrefix: 'Components'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs'
  },
  staticDirs: ['../public']
}

export default config
