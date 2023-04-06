import { StoryObj, ComponentMeta } from '@storybook/react'
import { Avatar } from '@/components/Avatars'

export default {
  component: Avatar,
  argTypes: {
    url: {
      description: 'ユーザアイコンの画像URLが入ります'
    },
    size: {
      description: 'アイコンサイズが入ります'
    }
  }
} as ComponentMeta<typeof Avatar>

export const Default: StoryObj = {
  args: {
    url: '/images/user_sample.jpeg',
    size: 'md'
  }
}
