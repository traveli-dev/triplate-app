import { ModalEdit } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalEdit> = {
  component: ModalEdit,
  argTypes: {
    isOpen: {
      description: '開閉のstate（boolean）'
    },
    onClose: {
      description: '閉じるボタン用のハンドラ'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ModalEdit>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null
  }
}
