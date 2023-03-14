import { StoryObj, ComponentMeta } from '@storybook/react'
import { Layout } from '@/components/Layouts'

export default {
  component: Layout,
  argTypes: {
    children: {
      description: '任意のコンポーネントが入ります'
    }
  },
  render: ({ children }) => {
    return <Layout>{children}</Layout>
  }
} as ComponentMeta<typeof Layout>

export const Default: StoryObj = {
  args: {
    children: <h1>Welcome to traveli!</h1>
  }
}
