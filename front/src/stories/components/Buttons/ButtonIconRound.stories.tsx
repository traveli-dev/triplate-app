import { ButtonIconRound } from '@/components/Buttons'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonIconRound> = {
  component: ButtonIconRound,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonIconRound>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
