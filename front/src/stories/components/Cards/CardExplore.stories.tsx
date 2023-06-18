import { Timestamp } from 'firebase/firestore'
import { CardExplore } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardExplore> = {
  component: CardExplore,
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
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardExplore>

export const Default: Story = {
  args: {
    title: 'いつメンの京都旅行',
    date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
    thumbnail: '/images/user_sample.jpeg',
    tags: ['海遊館', '海遊館']
  }
}
