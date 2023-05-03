import { InputImage } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputImage> = {
  component: InputImage,
  argTypes: {
    shape: {
      description: 'shapeが入ります'
    },
    alt: {
      description: 'alt要素が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputImage>

export const Box: Story = {
  args: {
    shape: 'box',
    alt: ''
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export const Round: Story = {
  args: {
    shape: 'round',
    alt: ''
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
