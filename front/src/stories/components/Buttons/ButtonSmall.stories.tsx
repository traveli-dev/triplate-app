import { ButtonSmall } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonSmall> = {
  component: ButtonSmall,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    },
    icon: {
      description: 'iconの種類が入ります'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonSmall>

export const Default: Story = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'heart'
  }
}
