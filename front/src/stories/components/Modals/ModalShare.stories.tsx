import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { ModalShare } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalShare> = {
  component: ModalShare,
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

type Story = StoryObj<typeof ModalShare>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null
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
