import { InputText } from '@/components/Inputs/InputText'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputText> = {
  component: InputText,
  argTypes: {
    placeholder: {
      description: 'placeholder要素が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputText>

export const Default: Story = {
  args: {
    placeholder: 'テキスト'
  }
}
