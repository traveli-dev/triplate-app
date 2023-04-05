import type { StoryObj, Meta } from '@storybook/react'
import { NavigationBottom } from '@/components/Navigations'

const meta: Meta<typeof NavigationBottom> = {
  component: NavigationBottom,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof NavigationBottom>

export const Default: Story = {
  parameters: {
    nextRouter: {
      pathname: '/home'
    }
  }
}
