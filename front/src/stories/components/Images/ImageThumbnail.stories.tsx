import { StoryObj, ComponentMeta } from '@storybook/react'
import { ImageThumbnail } from '@/components/Images'

export default {
  component: ImageThumbnail,
  argTypes: {
    url: {
      description: 'サムネイル画像のURLが入ります'
    }
  }
} as ComponentMeta<typeof ImageThumbnail>

export const Default: StoryObj = {
  args: {
    url: '/images/thumbnail_sample.jpg'
  }
}
