import type { StoryObj, Meta } from '@storybook/react'
import { GridIconWithText } from '@/components/Grids'

const meta: Meta<typeof GridIconWithText> = {
  component: GridIconWithText,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof GridIconWithText>

export const Default: Story = {}
