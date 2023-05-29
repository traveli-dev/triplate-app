import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { ModalAddPlace } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalAddPlace> = {
  component: ModalAddPlace,
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

type Story = StoryObj<typeof ModalAddPlace>

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
