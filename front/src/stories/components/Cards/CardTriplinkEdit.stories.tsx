import { CardTriplinkEdit } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardTriplinkEdit> = {
  component: CardTriplinkEdit,
  argTypes: {
    cardType: {
      description: 'cardTypeが入ります'
    },
    label: {
      description: 'ラベルが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardTriplinkEdit>

export const GoogleMap: Story = {
  args: {
    cardType: 'map',
    label: 'ラベル'
  },
  parameters: {
    backgrounds: {
      default: 'gray'
    }
  }
}

export const Link: Story = {
  args: {
    cardType: 'link',
    label: 'ラベル'
  },
  parameters: {
    backgrounds: {
      default: 'gray'
    }
  }
}
