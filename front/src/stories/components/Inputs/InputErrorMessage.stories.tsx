import { InputErrorMessage } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputErrorMessage> = {
  component: InputErrorMessage,
  argTypes: {
    message: {
      description: 'エラー文'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputErrorMessage>

export const Default: Story = {
  args: {
    message: 'ミスってるよ文字ミスってるよ文字ミスってるよ'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
