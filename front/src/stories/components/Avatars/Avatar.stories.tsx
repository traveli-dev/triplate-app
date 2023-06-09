import { Avatar } from '@/components/Avatars'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    url: {
      description: 'ユーザアイコンの画像URLが入ります'
    },
    size: {
      description: 'アイコンサイズが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    url: '/images/user_sample.jpeg',
    size: 'md'
  }
}
