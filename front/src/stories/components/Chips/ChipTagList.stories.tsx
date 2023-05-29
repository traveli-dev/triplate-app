import { ChipTagList } from '@/components/Chips'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ChipTagList> = {
  component: ChipTagList,
  argTypes: {
    tagList: {
      description: 'tagのリストが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ChipTagList>

export const Default: Story = {
  args: {
    tagList: ['京都', '3人旅']
  }
}
