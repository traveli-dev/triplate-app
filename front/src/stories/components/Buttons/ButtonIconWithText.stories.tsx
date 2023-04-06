import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonIconWithText } from '@/components/Buttons'

export default {
  component: ButtonIconWithText,
  argTypes: {
    iconType: {
      description: 'アイコンのタイプが入ります'
    }
  }
} as ComponentMeta<typeof ButtonIconWithText>

export const Default: StoryObj = {
  args: {
    iconType: 'members'
  }
}
