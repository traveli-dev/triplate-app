import { InputLink } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputLink> = {
  component: InputLink,
  argTypes: {
    iconType: {
      description: 'iconTypeが入ります'
    },
    placeholder: {
      description: 'placeholderが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputLink>

export const Twitter: Story = {
  args: {
    iconType: 'twitter',
    placeholder: 'テキスト'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
export const Instragram: Story = {
  args: {
    iconType: 'instagram',
    placeholder: 'テキスト'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
