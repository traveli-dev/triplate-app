import { ButtonIconWithText } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonIconWithText> = {
  component: ButtonIconWithText,
  argTypes: {
    iconType: {
      description: 'アイコンのタイプが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonIconWithText>

export const Default: Story = {
  args: {
    iconType: 'members'
  }
}
