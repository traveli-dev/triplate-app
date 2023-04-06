import { ChipTag } from '@/components/Chips'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ChipTag> = {
  component: ChipTag,
  argTypes: {
    tag: {
      description: 'tagのリストが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ChipTag>

export const Default: Story = {
  args: {
    tag: ['京都', '3人旅']
  }
}
