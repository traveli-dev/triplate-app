import { InputText } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputText> = {
  component: InputText,
  argTypes: {
    placeholder: {
      description: 'placeholder要素が入ります'
    },
    isInvalid: {
      description: 'trueの時invalid時のUIになる'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputText>

export const Default: Story = {
  args: {
    placeholder: 'テキスト',
    isInvalid: false
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
