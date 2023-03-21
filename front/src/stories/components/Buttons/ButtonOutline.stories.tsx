import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonOutline } from '@/components/Buttons'

export default {
  component: ButtonOutline,
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    }
  }
} as ComponentMeta<typeof ButtonOutline>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'plus'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
  }
}

export const Mobile: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります',
    icon: 'plus'
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
