import { Timestamp } from 'firebase/firestore'
import { CardTriplink } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardTriplink> = {
  component: CardTriplink,
  argTypes: {
    data: {
      description: 'title, thumbnail, date'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardTriplink>

export const Default: Story = {
  args: {
    data: {
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)]
    }
  }
}
