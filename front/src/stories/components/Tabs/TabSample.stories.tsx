import { TabSample } from '@/components/Tabs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabSample> = {
  component: TabSample,
  argTypes: {
    data: {
      description: 'データの配列が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TabSample>

export const Default: Story = {
  args: {
    data: [
      { name: 1, value: 'タブ１' },
      { name: 2, value: 'タブ２' },
      { name: 3, value: 'タブ３' }
    ]
  }
}
