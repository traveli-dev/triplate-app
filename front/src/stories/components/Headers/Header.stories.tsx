import { Header } from '@/components/Headers'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {
    href: {
      description: '遷移先の相対パスが入ります'
    },
    title: {
      description: 'h1'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    href: '/'
  }
}
export const WithTitle: Story = {
  args: {
    href: '/',
    title: '新しいトラベリンクを作成'
  }
}
