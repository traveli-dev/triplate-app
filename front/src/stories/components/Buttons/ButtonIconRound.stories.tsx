import { ButtonIconRound } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonIconRound> = {
  component: ButtonIconRound,
  argTypes:{
    icon:{
        description:'iconの種類が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonIconRound>

export const Default: Story = {
  args: {
   icon: 'back'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
  }
}

export const Mobile: Story = {
  args: {
    icon: 'back'
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
