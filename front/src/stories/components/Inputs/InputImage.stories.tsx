import { InputImage } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputImage> = {
  component: InputImage,
  argTypes: {
    alt: {
      description: 'alt要素が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputImage>

export const Default: Story = {
  args: {
    alt: 'img'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
