import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { ModalConfirmAddress } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalConfirmAddress> = {
  component: ModalConfirmAddress,
  argTypes: {
    isOpen: {
      description: '開閉のstate（boolean）'
    },
    onClose: {
      description: '閉じるボタン用のハンドラ'
    },
    name: {
      description: '場所の名前'
    },
    address: {
      description: '住所'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ModalConfirmAddress>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
    name: '東京駅',
    address: '東京駅日本、〒100-0005 東京都千代田区丸の内１丁目９'
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
        </>
      )
    }
  }
}
