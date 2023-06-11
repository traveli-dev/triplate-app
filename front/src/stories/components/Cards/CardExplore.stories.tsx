import { CardExplore } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardExplore> = {
  component: CardExplore,
  argTypes: {
    data: {
      description: 'title, thumbnail, day, keywords'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardExplore>

export const Default: Story = {
  args: {
    data: {
      title: 'いつメンの京都旅行',
      day: '２泊３日',
      thumbnail: '/images/user_sample.jpeg',
      keywords:['海遊館','海遊館']
    }
  }
}
