import { CardLinkEdit } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardLinkEdit> = {
  component: CardLinkEdit,
  argTypes: {
    cardType: {
      description: 'cardTypeが入ります'
    },
    label: {
      description: 'ラベルが入ります'
    },
    id: {
      description: 'idが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardLinkEdit>

export const GoogleMap: Story = {
  args: {
    cardType: 'map',
    label: 'ラベル',
    id: 1
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
    label: 'ラベル',
    id: 2
  },
  parameters: {
    backgrounds: {
      default: 'gray'
    }
  }
}
