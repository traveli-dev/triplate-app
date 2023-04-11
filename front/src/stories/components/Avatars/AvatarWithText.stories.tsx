import { AvatarWithText } from '@/components/Avatars'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof AvatarWithText> = {
  component: AvatarWithText,
  argTypes: {
    url: {
      description: 'ユーザアイコンの画像URLが入ります'
    },
    name: {
      description: 'ユーザの名前が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AvatarWithText>

export const Default: Story = {
  args: {
    url: '/images/user_sample.jpeg',
    name: 'ユーザ'
  }
}
