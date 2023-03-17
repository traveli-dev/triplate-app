import { StoryObj, ComponentMeta } from '@storybook/react'
import { Container } from '@/components/Containers'

export default {
  component: Container,
  argTypes: {
    children: {
      description: '任意のコンポーネントが入ります'
    }
  },
  render: ({ children, bgColor, isFull, isCenter }) => {
    return (
      <Container bgColor={bgColor} isFull={isFull} isCenter={isCenter}>
        {children}
      </Container>
    )
  }
} as ComponentMeta<typeof Container>

export const Default: StoryObj = {
  args: {
    children: <h1>Welcome to traveli!</h1>,
    bgColor: 'white',
    isFull: false,
    isCenter: false
  }
}
