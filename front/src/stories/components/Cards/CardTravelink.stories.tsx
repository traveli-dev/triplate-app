import { CardTravelink } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardTravelink> = {
  component: CardTravelink,
  argTypes: {
    data: {
      description: 'title, thumbnail, date'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardTravelink>

export const Default: Story = {
  args: {
    data: {
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27']
    }
  }
}
