import { TabDaysWithTravelink } from '@/components/Tabs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabDaysWithTravelink> = {
  component: TabDaysWithTravelink,
  argTypes: {
    travelinks: {
      description: 'travelinkデータの配列が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TabDaysWithTravelink>

export const Default: Story = {
  args: {
    travelinks: [
      { day: 1, name: 'aaa' },
      { day: 2, name: 'bbb' },
      { day: 3, name: 'ccc' },
      { day: 4, name: 'ddd' },
      { day: 5, name: 'eee' },
      { day: 6, name: 'fff' },
      { day: 7, name: 'ggg' },
      { day: 8, name: 'hhh' },
      { day: 9, name: 'iii' },
      { day: 10, name: 'jjj' }
    ]
  }
}