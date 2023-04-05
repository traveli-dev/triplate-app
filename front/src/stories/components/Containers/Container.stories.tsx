import type { StoryObj, Meta } from '@storybook/react'
import { Container } from '@/components/Containers'

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: {
      description: '任意のコンポーネントが入ります'
    },
    bgColor: {
      description: 'background-colorを切り替える'
    },
    isFull: {
      description: 'ページ全体まで高さを伸ばす（任意）'
    },
    isCenter: {
      description: '要素を全て左右中央揃えにする（任意）'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: <h1>Welcome to traveli!</h1>,
    bgColor: 'white',
    isFull: false,
    isCenter: false
  }
}
