import { StoryObj, ComponentMeta } from '@storybook/react'
import { IconWithText } from '@/components/Icons'

export default {
  component: IconWithText,
  argTypes: {
    iconType: {
      description: 'アイコンのタイプが入ります'
    }
  }
} as ComponentMeta<typeof IconWithText>

export const Default: StoryObj = {
  args: {
    iconType: 'qr'
  }
}
