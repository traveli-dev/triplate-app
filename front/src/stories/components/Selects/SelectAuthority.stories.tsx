import { SelectAuthority } from '@/components/Selects'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof SelectAuthority> = {
  component: SelectAuthority,
  argTypes: {
    canEdit: {
      description: '編集可能ならばtrueが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SelectAuthority>

export const Default: Story = {
  args: {
    canEdit: true
  }
}
