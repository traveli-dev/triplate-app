import { FormCreateUpdateTriplinks } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormCreateUpdateTriplinks> = {
  component: FormCreateUpdateTriplinks,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormCreateUpdateTriplinks>

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
