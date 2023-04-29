import { FloatingActionButton } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FloatingActionButton> = {
  component: FloatingActionButton,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FloatingActionButton>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
