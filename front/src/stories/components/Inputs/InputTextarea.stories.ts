import { InputTextarea } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputTextarea> = {
  component: InputTextarea,
  argTypes: {
    placeholder: {
      description: 'placeholderが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputTextarea>

export const Default: Story = {
  args: {
    placeholder: 'テキスト'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
