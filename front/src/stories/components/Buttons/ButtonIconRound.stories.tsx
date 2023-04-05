import type { StoryObj, Meta } from '@storybook/react'
import { ButtonIconRound } from '@/components/Buttons'

const meta: Meta<typeof ButtonIconRound> = {
  component: ButtonIconRound
}

export default meta

type Story = StoryObj<typeof ButtonIconRound>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}
