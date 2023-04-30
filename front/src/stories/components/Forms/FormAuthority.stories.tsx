import { FormAuthority } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormAuthority> = {
  component: FormAuthority,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormAuthority>

export const Default: Story = {}
