import { StoryObj, ComponentMeta } from '@storybook/react'
import { TabSample } from '@/components/Tabs'

export default {
  component: TabSample
} as ComponentMeta<typeof TabSample>

export const Default: StoryObj = {
  args: {
    data: [
      { name: 1, value: 'タブ１' },
      { name: 2, value: 'タブ２' },
      { name: 3, value: 'タブ３' }
    ]
  }
}
