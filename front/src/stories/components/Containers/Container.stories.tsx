import { StoryObj, ComponentMeta } from '@storybook/react'
import { Container } from '@/components/Containers'

export default {
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
