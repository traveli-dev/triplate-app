import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonFill } from '@/components/Buttons'

export default {
  component: ButtonFill,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    }
  }
} as ComponentMeta<typeof ButtonFill>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります'
  }
}
