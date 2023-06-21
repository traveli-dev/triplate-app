import { Timestamp } from 'firebase/firestore'
import { CardTriplate } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardTriplate> = {
  component: CardTriplate,
  argTypes: {
    title: {
      description: '見出し'
    },
    date: {
      description: 'timestamp型の配列'
    },
    thumbnail: {
      description: '見出しの画像'
    },
    tags: {
      description: 'タグの配列'
    },
    isSquare: {
      description: '常に長方形にするか否か'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardTriplate>

export const Default: Story = {
  args: {
    title: 'いつメンの京都旅行',
    date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
    thumbnail: '/images/user_sample.jpeg',
    tags: ['海遊館', '海遊館']
  }
}
