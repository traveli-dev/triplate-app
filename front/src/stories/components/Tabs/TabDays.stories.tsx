import type { StoryObj, Meta } from '@storybook/react'
import { TabDays } from '@/components/Tabs'

const meta: Meta<typeof TabDays> = {
  component: TabDays
}

export default meta

type Story = StoryObj<typeof TabDays>

export const Default: Story = {}
