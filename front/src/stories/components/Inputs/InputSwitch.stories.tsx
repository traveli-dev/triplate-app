import { InputSwitch } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputSwitch> = {
  component: InputSwitch,
  argTypes: {
    id: {
      description: 'input要素の一意のid'
    },
    text: {
      description: '何のボタンかを表す名称'
    },
    register: {
      description: 'react hook formのregister'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputSwitch>

export const Default: Story = {
  args: {
    text: 'ひとことメモを公開',
    id: 'checkbox-memo'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
