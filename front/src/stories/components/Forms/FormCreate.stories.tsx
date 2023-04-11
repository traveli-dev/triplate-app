import { FormCreate } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormCreate> = {
  component: FormCreate,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormCreate>

export const Default: Story = {}
