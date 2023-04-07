import { Layout } from '@/components/Layouts'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Layout> = {
  component: Layout,
  argTypes: {
    children: {
      description: '任意のコンポーネントが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Layout>

export const Default: Story = {
  args: {
    children: <h1>Welcome to traveli!</h1>
  }
}
