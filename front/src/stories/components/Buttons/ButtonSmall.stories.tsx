import { HiOutlineCog } from 'react-icons/hi'
import { ButtonSmall } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonSmall> = {
  component: ButtonSmall,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'ボタンのラベルが入ります'
    },
    Icon: {
      description: 'アイコンが入ります'
    },
    isFit: {
      description:
        'trueならflex-grow:0;で要素を伸ばさない、falseならflex-grow:1;で要素を伸ばす'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonSmall>

export const Default: Story = {
  args: {
    children: 'ボタンのラベルが入ります',
    Icon: HiOutlineCog
  }
}
