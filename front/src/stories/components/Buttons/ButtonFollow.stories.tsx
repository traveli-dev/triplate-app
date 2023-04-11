import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonFollow } from '@/components/Buttons'

export default {
  component: ButtonFollow,
  argTypes: {
    isFollowing: {
      description: 'ボタンの状態'
    },
    children: {
      description: 'ボタンのラベルが入ります'
    }
  }
} as ComponentMeta<typeof ButtonFollow>

export const Default: StoryObj = {
  args: {
    isFollowing: false
  }
}

export const Mobile: StoryObj = {
  args: {
    isFollowing: false
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
