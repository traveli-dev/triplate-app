import { StoryObj, ComponentMeta } from '@storybook/react'
import { InputImage } from '@/components/Inputs/InputImage'

export default {
  component: InputImage
} as ComponentMeta<typeof InputImage>

export const Default: StoryObj = {
  args: {
    src: '/images/CardImg/empty.svg',
    alt: 'img'
  }
}
