import { StoryObj, ComponentMeta } from '@storybook/react'
import { NavigationBottom } from '@/components/Navigations'

export default {
  component: NavigationBottom,
  render: () => {
    return <NavigationBottom />
  }
} as ComponentMeta<typeof NavigationBottom>

export const Default: StoryObj = {
  parameters: {
    nextRouter: {
      pathname: '/home'
    }
  }
}
