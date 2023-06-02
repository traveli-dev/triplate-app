import { InputTextArea } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputTextArea> = {
  component: InputTextArea,
  argTypes: {
    placeholder: {
      description: 'placeholder要素が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputTextArea>

export const Default: Story = {
  args: {
    placeholder: '自己紹介'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
