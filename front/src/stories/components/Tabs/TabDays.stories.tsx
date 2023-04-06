import { TabDays } from '@/components/Tabs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabDays> = {
  component: TabDays,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TabDays>

export const Default: Story = {}
