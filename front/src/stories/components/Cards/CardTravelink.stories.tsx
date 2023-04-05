import type { StoryObj, Meta } from '@storybook/react'
import { CardTravelink } from '@/components/Cards'

const meta: Meta<typeof CardTravelink> = {
  component: CardTravelink,
  argTypes: {
    travelink: {
      description: 'ユーザが作成、または、参加中のトラべリンクが入ります'
    },
    favorite: {
      description: 'いいねしたみんなのたびトラべリンクが入ります'
    }
  }
}

export default meta

type Story = StoryObj<typeof CardTravelink>

export const Default: Story = {
  args: {
    travelink: {
      id: 'abc',
      ownerId: 'opanchu',
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'],
      ownerName: 'おぱんちゅうさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    }
  }
}

export const Favorite: Story = {
  args: {
    favorite: {
      puclicId: '123',
      title: 'コスパ重視の京都旅行',
      tag: ['京都', '3人旅'],
      thumbnail: '/images/user_sample.jpeg'
    }
  }
}
