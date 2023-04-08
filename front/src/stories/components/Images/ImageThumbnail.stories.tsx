import { ImageThumbnail } from '@/components/Images'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ImageThumbnail> = {
  component: ImageThumbnail,
  argTypes: {
    url: {
      description: 'サムネイル画像のURLが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ImageThumbnail>

export const Default: Story = {
  args: {
    url: '/images/thumbnail_sample.jpg'
  }
}
