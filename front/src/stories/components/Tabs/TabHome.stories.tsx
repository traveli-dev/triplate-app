import type { StoryObj, Meta } from '@storybook/react'
import { TabHome } from '@/components/Tabs'

const meta: Meta<typeof TabHome> = {
  component: TabHome,
  argTypes: {
    userId: {
      description: '自分のユーザIDが入ります'
    },
    myTravelinkList: {
      description:
        'ユーザが作成、または、参加中のトラべリンクのリストが入ります'
    },
    favoriteList: {
      description: 'いいねしたみんなのたびトラべリンクのリストが入ります'
    }
  }
}

export default meta

type Story = StoryObj<typeof TabHome>

export const Default: Story = {
  args: {
    userId: 'opanchu',

    myTravelinkList: [
      {
        id: 'abc',
        ownerId: 'opanchu',
        title: 'いつメンの京都旅行',
        thumbnail: '/images/user_sample.jpeg',
        date: ['2023.03.25', '2023.03.27'],
        ownerName: 'おぱんちゅうさぎ',
        ownerIcon: '/images/user_sample.jpeg'
      },
      {
        id: 'def',
        ownerId: 'usagi',
        title: '鳥取４人旅',
        thumbnail: '/images/user_sample.jpeg',
        date: ['2023.03.25', '2023.03.27'],
        ownerName: 'うさぎ',
        ownerIcon: '/images/user_sample.jpeg'
      }
    ],
    favoriteList: [
      {
        puclicId: '123',
        title: 'コスパ重視の京都旅行',
        tag: ['京都', '3人旅'],
        thumbnail: '/images/user_sample.jpeg'
      },
      {
        puclicId: '456',
        title: 'うどん巡り四国旅',
        tag: ['香川', '徳島', '愛媛', '高知', '2人旅'],
        thumbnail: '/images/user_sample.jpeg'
      }
    ]
  }
}

export const NoData: Story = {
  args: {
    userId: 'opanchu',
    myTravelinkList: [],
    favoriteList: []
  }
}
