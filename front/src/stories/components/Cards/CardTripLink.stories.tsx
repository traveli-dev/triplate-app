import { CardTripLink } from '@/components/Cards'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof CardTripLink> = {
  component: CardTripLink,
  argTypes: {
    data: {
      description: 'title, thumbnail, date'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CardTripLink>

export const Default: Story = {
  args: {
    data: {
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27']
    }
  }
}
