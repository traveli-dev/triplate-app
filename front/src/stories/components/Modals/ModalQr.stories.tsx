import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { ModalQr } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalQr> = {
  component: ModalQr,
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

type Story = StoryObj<typeof ModalQr>

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
