import { InputImage } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputImage> = {
  component: InputImage,
  argTypes: {
    src: {
      description: 'プレビューされる画像のURL（空の場合はデフォルトのアイコン）'
    },
    uploading: {
      description: 'アップロード中かどうか'
    },
    onChange: {
      description: '画像をuploadするハンドラ'
    },
    type: {
      description: 'avatar用の丸いやつかthumbnail用の長方形か'
    },
    text: {
      description: '画像の下に変更するをつけたい時とかに使う'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputImage>

export const Default: Story = {
  args: {
    src: '/images/user_sample.jpeg',
    uploading: false,
    type: 'thumbnail',
    onChange: () => null,
    text: undefined
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
