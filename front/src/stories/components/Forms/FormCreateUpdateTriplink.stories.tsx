import { FormCreateUpdateTriplink } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormCreateUpdateTriplink> = {
  component: FormCreateUpdateTriplink,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormCreateUpdateTriplink>

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
