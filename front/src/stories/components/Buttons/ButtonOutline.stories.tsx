import { ButtonOutline } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonOutline> = {
  component: ButtonOutline,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    },
    Icon: {
      description: 'IconTypeが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonOutline>

export const Default: Story = {
  args: {
    children: 'ボタンのラベルが入ります'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
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
