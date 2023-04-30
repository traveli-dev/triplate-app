import { ChipTag } from '@/components/Chips'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ChipTag> = {
  component: ChipTag,
  argTypes: {
    tag: {
      description: 'tagのリストが入ります'
    },
    isRound: {
      description: 'trueで丸くなります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ChipTag>

export const Default: Story = {
  args: {
    tag: '京都'
  }
}

export const Round: Story = {
  args: {
    tag: '京都',
    isRound: true
  }
}
