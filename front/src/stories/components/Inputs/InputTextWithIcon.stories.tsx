import { InputTextWithIcon } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputTextWithIcon> = {
  component: InputTextWithIcon,
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

type Story = StoryObj<typeof InputTextWithIcon>

export const Link: Story = {
  args: {
    iconType: 'link',
    placeholder: 'https://hogehoge.com'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export const Label: Story = {
  args: {
    iconType: 'label',
    placeholder: 'placeholderが入ります'
  },
  parameters: {
    backgrounds: {
      default: 'ほげほげ'
    }
  }
}

export const Time: Story = {
  args: {
    iconType: 'time',
    placeholder: '99:99'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export const Memo: Story = {
  args: {
    iconType: 'memo',
    placeholder: 'ほげほげ'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
