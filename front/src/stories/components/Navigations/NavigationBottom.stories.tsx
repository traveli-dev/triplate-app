import { NavigationBottom } from '@/components/Navigations'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof NavigationBottom> = {
  component: NavigationBottom,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof NavigationBottom>

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/home'
      }
    }
  }
}
