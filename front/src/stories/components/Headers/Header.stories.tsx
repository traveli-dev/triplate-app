import { StoryObj, ComponentMeta } from '@storybook/react'
import { Header } from '@/components/Headers'

export default {
  component: Header,
  argTypes: {
    href: {
      description: '遷移先の相対パスが入ります'
    },
    title: {
      description: 'h1'
    }
  }
} as ComponentMeta<typeof Header>

export const Default: StoryObj = {
  args: {
    href: '/'
  }
}
export const WithTitle: StoryObj = {
  args: {
    href: '/',
    title: '新しいトラベリンクを作成'
  }
}
