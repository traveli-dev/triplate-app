import { ButtonWithIcon } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonWithIcon> = {
  component: ButtonWithIcon,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonWithIcon>

export const Default: Story = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'link'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
  }
}
