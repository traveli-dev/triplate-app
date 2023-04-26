import { CardMemo } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardMemo> = {
  component: CardMemo,
  argTypes: {
    data: {
      description: 'id, budget, items, memo'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardMemo>

export const Default: Story = {
  args: {
    data: {
      id: 'abcde', // travelinkのid
      budget: '30000',
      items: ['自撮り棒', 'チェキ', '日傘'],
      memo: '目指せ写真１００枚！'
    }
  }
}

export const Empty: Story = {
  args: {
    data: {
      id: 'abcde', // travelinkのid
      budget: '',
      items: [],
      memo: ''
    }
  }
}
