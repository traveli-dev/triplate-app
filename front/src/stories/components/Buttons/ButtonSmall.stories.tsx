import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonSmall } from '@/components/Buttons'

export default {
  component: ButtonSmall,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    },
    icon: {
      description: 'iconの種類が入ります'
    }
  }
} as ComponentMeta<typeof ButtonSmall>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'heart'
  }
}
