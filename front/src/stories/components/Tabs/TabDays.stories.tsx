import { StoryObj, ComponentMeta } from '@storybook/react'
import { TabDays } from '@/components/Tabs'

export default {
  component: TabDays,
  render: () => {
    return <TabDays />
  }
} as ComponentMeta<typeof TabDays>

export const Default: StoryObj = {}
