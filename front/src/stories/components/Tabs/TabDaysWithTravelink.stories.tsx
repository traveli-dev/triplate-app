import { StoryObj, ComponentMeta } from '@storybook/react'
import { TabDaysWithTravelink } from '@/components/Tabs'

export default {
  component: TabDaysWithTravelink
} as ComponentMeta<typeof TabDaysWithTravelink>

export const Default: StoryObj = {
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
