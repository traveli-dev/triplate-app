import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const toPath = (arg: string) => path.join(process.cwd(), arg)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@': path.resolve(__dirname, '../src')
        }
      }
    }
  }
}

export default config