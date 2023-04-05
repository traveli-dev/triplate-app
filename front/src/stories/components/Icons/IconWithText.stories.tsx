import type { StoryObj, Meta } from '@storybook/react'
import { IconWithText } from '@/components/Icons'

const meta: Meta<typeof IconWithText> = {
  component: IconWithText,
  argTypes: {
    iconType: {
      description: 'アイコンのタイプが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof IconWithText>

export const Default: Story = {
  args: {
    iconType: 'qr'
  }
}
