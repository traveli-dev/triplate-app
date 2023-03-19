import { StoryObj, ComponentMeta } from '@storybook/react'
import { ChipTag } from '@/components/Chips'

export default {
  component: ChipTag,
  argTypes: {
    tag: {
      description: 'tagのリストが入ります'
    }
  }
} as ComponentMeta<typeof ChipTag>

export const Default: StoryObj = {
  args: {
    tag: ['京都', '3人旅']
  }
}
