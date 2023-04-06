import { StoryObj, ComponentMeta } from '@storybook/react'
import { AvatarWithText } from '@/components/Avatars'

export default {
  component: AvatarWithText,
  argTypes: {
    url: {
      description: 'ユーザアイコンの画像URLが入ります'
    },
    name: {
      description: 'ユーザの名前が入ります'
    }
  }
} as ComponentMeta<typeof AvatarWithText>

export const Default: StoryObj = {
  args: {
    url: '/images/user_sample.jpeg',
    name: 'ユーザ'
  }
}
