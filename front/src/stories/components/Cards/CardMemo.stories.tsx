import { CardMemo } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardMemo> = {
  component: CardMemo,
  argTypes: {
    id: {
      description: 'トラべリンクのidが入ります'
    },
    budget: {
      description: '予算が入ります'
    },
    items: {
      description: '持ち物のリストが入ります'
    },
    memo: {
      description: 'メモが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardMemo>

export const Default: Story = {
  args: {
    id: 'abcde', // travelinkのid
    budget: '30000',
    items: ['自撮り棒', 'チェキ', '日傘'],
    memo: '目指せ写真１００枚！'
  }
}

export const Empty: Story = {
  args: {
    id: 'abcde', // travelinkのid
    budget: '',
    items: [],
    memo: ''
  }
}
