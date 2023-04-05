import type { StoryObj, Meta } from '@storybook/react'
import { Avatar } from '@/components/Avatars'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    url: {
      description: 'ユーザアイコンの画像URLが入ります'
    },
    size: {
      description: 'アイコンサイズが入ります'
    }
  }
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    url: '/images/user_sample.jpeg',
    size: 'md'
  }
}
