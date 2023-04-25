import { TabHome } from '@/components/Tabs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabHome> = {
  component: TabHome,
  argTypes: {
    data: {
      description: ''
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TabHome>

export const Default: Story = {
  args: {
    data: [
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
  }
}

export const NoData: Story = {
  args: {
    data: []
  }
}
