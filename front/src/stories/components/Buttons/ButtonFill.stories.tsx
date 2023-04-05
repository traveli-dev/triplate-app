import type { StoryObj, Meta } from '@storybook/react'
import { ButtonFill } from '@/components/Buttons'

const meta: Meta<typeof ButtonFill> = {
  component: ButtonFill,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonFill>

export const Default: Story = {
  args: {
    children: 'ボタンのラベルが入ります'
  }
}

export const Mobile: Story = {
  args: {
    children: 'ボタンのラベルが入ります'
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
