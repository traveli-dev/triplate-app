import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonOutline } from '@/components/Buttons'

export default {
  component: ButtonOutline,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    }
  },
  render: ({ children, icon }) => {
    return <ButtonOutline icon={icon}>{children}</ButtonOutline>
  }
} as ComponentMeta<typeof ButtonOutline>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'plus'
  }
}
