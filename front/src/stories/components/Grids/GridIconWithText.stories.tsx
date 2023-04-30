import { GridIconWithText } from '@/components/Grids'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof GridIconWithText> = {
  component: GridIconWithText,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof GridIconWithText>

export const Default: Story = {}
