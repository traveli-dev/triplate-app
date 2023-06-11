import { InputLabel, InputText } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  argTypes: {
    htmlFor: {
      description: 'input要素と紐づけるid'
    },
    text: {
      description: 'labelとして表示されるtext'
    },
    subText: {
      description: '灰色で表示される補足情報'
    },
    children: {
      description: 'input系の要素'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputLabel>

export const Default: Story = {
  args: {
    htmlFor: 'name',
    text: '表示されるなまえ',
    subText: 'いつでも変更できます',
    children: (
      <InputText
        id="name"
        isInvalid={false}
        placeholder="表示されるなまえを入力"
      />
    )
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
