import { ToggleSwitch } from '@/components/Switches'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ToggleSwitch> = {
  component: ToggleSwitch,
  argTypes: {
    id: {
      description: 'idが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ToggleSwitch>

export const Default: Story = {
  args: {
    id: 0
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
